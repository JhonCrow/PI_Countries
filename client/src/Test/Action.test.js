import { getCountries, getActivities, getNameCountries,
    getDetail, postActivity, filterByContinente,
    orderByName, orderByPopulation, filterByActivities } from '../Actions/index.js';

    it('Debería retornar una action con la propiedad type "FILTER_BY_CONTINENTE":', () => {
        expect(filterByContinente()).toEqual({
          type: 'FILTER_BY_CONTINENTE',
        });
      });

      it('Debería retornar una action con la propiedad type "FILTER_BY_ACTIVITIES":', () => {
        expect(filterByActivities()).toEqual({
          type: 'FILTER_BY_ACTIVITIES',
        });
      });