const { Router } = require('express');
const router = Router();

const { deleteActivitiesController } =require('../Controllers/deleteActivity.controller');

router.delete('/activities', deleteActivitiesController);

module.exports = router;