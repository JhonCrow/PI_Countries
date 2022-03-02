const { Router } = require('express');
const router = Router();

const { getCountriesController } =require('../controllers/Countries.controller');

router.get('/countries', getCountriesController);

module.exports = router;

