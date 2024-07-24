import API from '../../../../axios/API';

export const FETCH_VOLCANOES_REQUEST = 'FETCH_VOLCANOES_REQUEST';
export const FETCH_VOLCANOES_SUCCESS = 'FETCH_VOLCANOES_SUCCESS';
export const FETCH_VOLCANOES_FAILURE = 'FETCH_VOLCANOES_FAILURE';

/**
 * Fetch volcanoes data from the server.
 * @param {string} country - The selected country.
 * @param {string} radius - The selected radius.
 */
export const fetchVolcanoes = (country, radius = "") => {
    return async (dispatch) => {
        dispatch({ type: FETCH_VOLCANOES_REQUEST });
        let endPoint = `volcanoes?country=${country}`;
        if (radius) {
            endPoint += `&populatedWithin=${radius}`;
        }

        try {
            const response = await API(endPoint, 'GET');
            const data = response.data;
            dispatch({ type: FETCH_VOLCANOES_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_VOLCANOES_FAILURE, payload: error.message || 'Failed to fetch volcanoes' });
        }
    };
};

export const fetchCountries = async () => {
    try {
        const response = await API('countries', 'GET');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch countries');
    }
};