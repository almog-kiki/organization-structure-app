const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.ENUM('Employee', 'Manager'),
      allowNull: false,
    },
    managerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users', // Table name in the database
    underscored: false, // Use snake_case column names in the database
    timestamps: true, // Adds createdAt and updatedAt fields
    hooks: {
      beforeCreate: async (user, options) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      }
    },
  });


  User.prototype.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
  }

  User.associate = function(models) {
    // A User has many subordinates (Employees) and a User belongs to a manager
    User.hasMany(models.User, { foreignKey: 'managerId' });
    User.hasMany(models.Report, { foreignKey: 'employeeId', as: 'Reports' });
    User.hasMany(models.Task, { foreignKey: 'assignedTo', as: 'Tasks' });
    User.belongsTo(models.User, { foreignKey: 'managerId', as: 'Manager' });
  };

  return User;
};