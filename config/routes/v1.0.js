const _ = require('lodash');
const router = require('express').Router();

const InventoryController = require('../../app/controllers/inventories.controller');
const resError = require('../../app/middleware/res_error');
const resSuccess = require('../../app/middleware/res_success');

router.use(resError);
router.use(resSuccess);

// ####### Health Check #########
router.get('/', (req, res) => res.status(200).send('kenlo API.'));
router.get('/health-check', (req, res) => res.status(200).send('Beat.'));

// ####### Inventories #########
router.get('/inventories',InventoryController.list);
router.get('/inventories/:id',InventoryController.getById);

module.exports = router;