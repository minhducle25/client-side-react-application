const initialState = {
    volcanoes: [],
    countries: [],
    isLoading: false,
    error: null
};

const volcanoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_VOLCANOES_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case 'FETCH_VOLCANOES_SUCCESS':
            return {
                ...state,
                isLoading: false,
                volcanoes: action.payload,
                error: null
            };
        case 'FETCH_COUNTRIES_SUCCESS':
            return {
                ...state,
                countries: action.payload
            };
        case 'FETCH_VOLCANOES_FAILURE':
            return {
                ...state,
                isLoading: false,
                volcanoes: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default volcanoReducer;