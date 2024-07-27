'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.bulkInsert('Reports',[{
      employeeId: 3,
      reportText: 'report text1 by employee 3',
      reportDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      employeeId: 3,
      reportText: 'report text3 by employee 3',
      reportDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      employeeId: 2,
      reportText: 'report text by employee 2 (is a manager)',
      reportDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      employeeId: 4,
      reportText: 'report text by employee 4',
      reportDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reports', null, {});
  }
};
