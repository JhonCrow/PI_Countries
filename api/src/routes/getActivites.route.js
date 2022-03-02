const { Router } = require('express');
const router = Router();

const { getActivitiesController } =require('../Controllers/getActivity.controller');

router.get('/activities', getActivitiesController);

module.exports = router;