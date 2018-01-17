'use strict';
module.exports = (sequelize, DataTypes) => {
  var doctor = sequelize.define('doctor', {
    idDoctor: DataTypes.INTEGER,
    firstNameDoctor: DataTypes.STRING,
    lastNameDoctor: DataTypes.STRING,
    specDoctor: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return doctor;
};