import API from '../../../../axios/API';

export const fetchVolcanoDetail = (id) => async (dispatch) => {
    try {
        const response = await API(`volcano/${id}`, 'GET');
        const data = response.data;
        dispatch({
            type: 'FETCH_VOLCANO_DETAIL_SUCCESS',
            payload: data
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_VOLCANO_DETAIL_ERROR',
            payload: error.message
        });
    }
};
