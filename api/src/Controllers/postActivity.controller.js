const { postActivitiesService } = require('../services/Activity.service');

const postActivitiesController = async (req, res) => {
    try {
        const { nombre, duracion, dificultad, temporada, pais } = req.body
        const postAllActivities = await postActivitiesService(nombre, duracion, dificultad, temporada, pais);
        res.status(200).json(postAllActivities);
    }
    catch (error) {
        res.status(error.status || 400).json({
            message: error.message || error,
        });
    };
};

module.exports = {
    postActivitiesController,
};
