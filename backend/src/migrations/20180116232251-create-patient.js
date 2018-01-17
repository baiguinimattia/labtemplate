'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPatient: {
        type: Sequelize.INTEGER
      },
      firstNamePatient: {
        type: Sequelize.STRING
      },
      lastNamePatient: {
        type: Sequelize.STRING
      },
      sexPatient: {
        type: Sequelize.STRING
      },
      dobPatient: {
        type: Sequelize.STRING
      },
      adressPatient: {
        type: Sequelize.STRING
      },
      phonePatient: {
        type: Sequelize.STRING,
        allowNull :true
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('patients');
  }
};