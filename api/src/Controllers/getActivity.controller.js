const { getActivitiesService } = require('../services/getActivity.service');

const getActivitiesController = async (req, res) => {
    try {
        const getAllActivities = await getActivitiesService();
        res.status(200).json(getAllActivities);

    } 
    catch (error) {
        res.status(error.status || 400).json({
            message: error.message || error,
        });
    };
};

module.exports = {
    getActivitiesController,
};
