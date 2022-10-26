const router = require('express').Router();
const getHouseList = require('../controller/house.controller');

router.get('/', getHouseList);

module.exports = router;