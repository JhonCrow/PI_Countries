const { Router } = require('express')
const router = Router()

const { getCountryByIdController } =require('../controllers/getCountryById.controller');


router.get('/countries/:id', getCountryByIdController);

module.exports = router;