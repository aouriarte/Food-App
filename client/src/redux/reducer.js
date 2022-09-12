import {
    GET_ALL_RECIPES,
    GET_ALL_DIETS,
    GET_RECIPE_NAME,
    GET_RECIPE_DETAILS,
    POST_RECIPE,
} from './actions.js';

const initialState = {
    recipes: [],
    recipesDetails: {},
    diets: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: payload,
            };
        case GET_ALL_DIETS:
            return {
                ...state,
                diets: payload,
            };
        case GET_RECIPE_NAME:
            return {
                ...state,
                recipes: payload,
            };
        case GET_RECIPE_DETAILS:
            return {
                ...state,
                recipesDetails: payload,
            };
        case POST_RECIPE:
            return {
                ...state,
            };
        default: {
            return state
        }
    }
};

export default rootReducer;