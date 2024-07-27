'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    employeeId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    reportText: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    reportDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Report',
    tableName: 'Reports', // Table name in the database
    underscored: false, // Use snake_case column names in the database
    timestamps: true, // Adds createdAt and updatedAt fields
  });


  Report.associate = function(models) {
    // A User has many Reports
    Report.belongsTo(models.User, { foreignKey: 'employeeId', as: 'Employee' });
  };

  return Report;
};