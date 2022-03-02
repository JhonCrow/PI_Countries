const { deleteActivityService } = require('../services/deleteActivity.service');

const deleteActivitiesController =  (req, res) => {
    try {
        const { nombre } = req.body
        console.log(nombre)
        deleteActivityService(nombre);
        res.status(200).json({msg: 'se borro correctamente'});

    } 
    catch (error) {
        res.status(error.status || 400).json({
            message: error.message || error,
        });
    };
};

module.exports = {
    deleteActivitiesController,
};