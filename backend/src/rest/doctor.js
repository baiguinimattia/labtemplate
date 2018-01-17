var express = require('express');
var router = express.Router();
var doctor = require('../service/').doctor;

router.get('/', doctor.list);
router.get('/:id', doctor.findById);
router.post('/', doctor.create);
//router.put('/:id',doctor.update);
router.delete('/:id', doctor.delete);
module.exports = router;
