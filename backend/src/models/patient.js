'use strict';
module.exports = (sequelize, DataTypes) => {
  var patient = sequelize.define('patient', {
    idPatient: DataTypes.INTEGER,
    firstNamePatient: DataTypes.STRING,
    lastNamePatient: DataTypes.STRING,
    sexPatient: DataTypes.STRING,
    dobPatient: DataTypes.STRING,
    adressPatient: DataTypes.STRING,
    phonePatient: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return patient;
};