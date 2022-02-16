const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Country = require('./Countries.route.js')
const Activity = require('./Activities.route.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/', Country)
router.use('/activities', Activity)


module.exports = router;
