'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Tasks',[{
      assignedTo: 3,
      taskText: 'manager 2 created task for employee 3',
      assignDate: new Date(),
      dueDate: new Date(Date.now() + (60 * 86400000)), // after 10 days
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      assignedTo: 4,
      taskText: 'manager 1 created task for employee 4',
      assignDate: new Date(),
      dueDate: new Date(Date.now() + (90 * 86400000)),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      assignedTo: 2,
      taskText: 'manager 1 created task for manager 1',
      assignDate: new Date(),
      dueDate: new Date(Date.now() + (180 * 86400000)),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Tasks', null, {});
  }
};
