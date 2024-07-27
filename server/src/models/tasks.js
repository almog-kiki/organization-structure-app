'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    assignedTo: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    taskText: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
     assignDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'Tasks', // Table name in the database
    underscored: false, // Use snake_case column names in the database
    timestamps: true, // Adds createdAt and updatedAt fields
  });


  Task.associate = function(models) {
    // A User has many Task
    Task.belongsTo(models.User, { foreignKey: 'assignedTo', as: 'Employee'});
  };

  return Task;
};