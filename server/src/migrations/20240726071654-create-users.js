'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try 
    {
      await queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique:true,
          type: Sequelize.INTEGER
        },
        firstName: {
          allowNull: false,
          type: Sequelize.STRING(100)
        },
        lastName: {
          allowNull: false,
          type: Sequelize.STRING(100)
        },
        position: {
          allowNull: false,
          type: Sequelize.ENUM('Employee', 'Manager')
        },
        managerId: {
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        }
      }, { transaction });
      await queryInterface.addIndex('Users', ['firstName', 'position', 'managerId'], { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};