'use strict';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',[{
      id:1,
      firstName: 'Manager_1_name',
      lastName: 'Manager_1_lastname',
      position: 'Manager',
      password: bcrypt.hashSync('111', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:2,
      firstName: 'Manager_2_name',
      lastName: 'Manager_2_lastname',
      position: 'Manager',
      password: bcrypt.hashSync('222', salt),
      managerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
