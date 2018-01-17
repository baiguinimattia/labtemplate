'use strict';
module.exports = (sequelize, DataTypes) => {
  var datee = sequelize.define('datee', {
    idDoctor: DataTypes.INTEGER,
    idPatient: DataTypes.INTEGER,
    salon: DataTypes.STRING,
    dateInt: DataTypes.STRING,
    dateDis: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return datee;
};