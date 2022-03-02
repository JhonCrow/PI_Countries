const { Activity, Country } = require('../db');

const getActivitiesService = async () => {
    try {
        const activities = await Activity.findAll({
            include: [{
                model: Country,
                through: {
                    attributes: [],
                }
            }]
        });
        return activities;
    } 
    catch (error) {
        console.log(error);
        throw error;
    };
};
module.exports = { getActivitiesService };