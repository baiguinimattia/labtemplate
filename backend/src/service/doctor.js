"use strict";

const doctor = require('../models').doctor;

exports.list = function (req, res) {
  doctor.findAll().then(doctor => {
    res.jsonp(doctor);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(doctor.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  doctor.findById(id).then(doctor => {
    if (!doctor) {
      return res.status(400).send({
        message: 'doctor Not Found',
      });
    }
    res.jsonp(doctor);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  doctor.findById(req.params.id)
    .then(doctor => {
      if (!doctor) {
        return res.status(400).send({
          message: 'doctor Not Found',
        });
      }
      return doctor
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));

    /*doctor.findById(req.params.id)
    .then(doctor => {
      if (!doctor) {
        return res.status(400).send({
          message: 'doctor Not Found',
        });
      }
      return doctor
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));*/
};