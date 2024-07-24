import API from '../../../../axios/API';

export const resetRegisterState = () => ({
    type: 'RESET_REGISTER_STATE'
});

export const registerUser = (userData) => async (dispatch) => {
    try {
        const response = await API('user/register', 'POST', userData);
        const data = response.data;
        
        if (data.error) {
            dispatch({ type: 'REGISTER_FAIL', payload: data.message });
        } else {
            dispatch({ type: 'REGISTER_SUCCESS', payload: data.message });
        }
    } catch (error) {
        dispatch({
            type: 'REGISTER_FAIL',
            payload: error.response ? error.response.data.message : error.message
        });
    }
};
