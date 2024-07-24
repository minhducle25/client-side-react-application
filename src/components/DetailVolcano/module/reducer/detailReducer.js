const initialState = {
    details: {},
    loading: false,
    error: null
};

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_VOLCANO_DETAIL_SUCCESS':
            return {
                ...state,
                details: action.payload,
                loading: false
            };
        case 'FETCH_VOLCANO_DETAIL_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default detailReducer;
