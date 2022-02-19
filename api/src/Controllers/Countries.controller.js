
const { getCountriesService } = require('../services/Countries.service');

const getCountriesController =  async (req, res, next) => {
    try {
      const { name } = req.query;
        const getAllCountries = await getCountriesService(name);

        res.status(200).json(getAllCountries);

      } catch (error) {
        res.status(error.status || 400).json({
          message: error.message || error,
        });
      }
}



module.exports={
    getCountriesController,
};
