'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('datees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idDoctor: {
        type: Sequelize.INTEGER
      },
      idPatient: {
        type: Sequelize.INTEGER
      },
      salon: {
        type: Sequelize.STRING
      },
      dateInt: {
        type: Sequelize.STRING
      },
      dateDis: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('datees');
  }
};