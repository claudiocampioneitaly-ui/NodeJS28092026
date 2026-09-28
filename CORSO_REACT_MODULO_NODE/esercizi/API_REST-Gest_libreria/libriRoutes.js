const express = require('express');
const controller = require('./libriController');
const verificaRuolo = require('./verificaRuolo');

const router = express.Router();

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', verificaRuolo('admin'), controller.remove); // 👈 Solo admin

module.exports = router;