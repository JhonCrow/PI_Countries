const { CountryByIdService } = require('../services/CountryById.service');

const getCountryByIdController =  async (req, res ) => {
    try {
        const { id } = req.params;
        const getCountry = await CountryByIdService(id);

        res.status(200).json(getCountry);

      } 
    catch (error) {
        res.status(error.status || 400).json({
          message: error.message || error,
        });
      };
};

module.exports={
  getCountryByIdController,
};
