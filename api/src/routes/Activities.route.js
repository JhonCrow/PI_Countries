const { Router } = require('express')
const router = Router()

const { postActivitiesController } =require('../Controllers/postActivity.controller');

router.post('/activities', postActivitiesController);

module.exports = router;