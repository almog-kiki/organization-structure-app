'use strict';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',[{
      id:3,
      firstName: 'Employee_3_name',
      lastName: 'Employee_1_lastname',
      position: 'Employee',
      managerId: 2,
      password: bcrypt.hashSync('333', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:4,
      firstName: 'Employee_4_name',
      lastName: 'Employee_4_lastname',
      position: 'Employee',
      password: bcrypt.hashSync('444', salt),
      managerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', [{id:3},{id:4}], {});
  }
};
