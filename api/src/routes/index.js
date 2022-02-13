const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Country = require('./Countries.js')
const Activity = require('./Activities.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/countries', Country)
router.use('/activities', Activity)


module.exports = router;
