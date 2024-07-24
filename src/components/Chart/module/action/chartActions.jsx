import API from '../../../../axios/API';

export const FETCH_POPULATION_BEGIN = 'FETCH_POPULATION_BEGIN';
export const FETCH_POPULATION_SUCCESS = 'FETCH_POPULATION_SUCCESS';
export const FETCH_POPULATION_FAILURE = 'FETCH_POPULATION_FAILURE';

export const fetchPopulationBegin = () => ({
  type: FETCH_POPULATION_BEGIN
});

export const fetchPopulationSuccess = data => ({
  type: FETCH_POPULATION_SUCCESS,
  payload: { data }
});

export const fetchPopulationFailure = error => ({
  type: FETCH_POPULATION_FAILURE,
  payload: { error }
});

export const fetchPopulationData = (volcanoId) => {
  return async (dispatch) => {
      dispatch(fetchPopulationBegin());
      const token = localStorage.getItem('token');
      const endPoint = `volcano/${volcanoId}`;

      try {
          const response = await API(endPoint, 'GET', null, token);
          const data = response.data;
          dispatch(fetchPopulationSuccess(data));
      } catch (error) {
          dispatch(fetchPopulationFailure(error.message || 'Failed to fetch population data'));
      }
  };
};