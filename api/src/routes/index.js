const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Country = require('./Countries.route.js');
const CountryId = require('./getCountryById.route.js');
const getActivity = require('./getActivites.route');
const Activity = require('./Activities.route.js');
const deleteActivity = require('./DeleteActivity.route')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', Country, CountryId);
router.use('/', Activity, getActivity, deleteActivity);


module.exports = router;
