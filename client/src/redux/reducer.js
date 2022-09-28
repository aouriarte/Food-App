import {
    GET_ALL_RECIPES,
    GET_ALL_DIETS,
    GET_RECIPE_NAME,
    GET_RECIPE_DETAILS,
    POST_RECIPE,
    FILTER_DIETS,
    ORDER_TITLE,
    ORDER_SCORE,
    CLEAN_RECIPES,
    CLEAN_DETAILS
} from './actions.js';

const initialState = {
    allRecipes: [],
    recipesDetails: {},
    recipesFilter: [], 
    allDiets: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipesFilter: payload,
                allRecipes: payload,
            };
        case GET_ALL_DIETS:
            return {
                ...state,
                allDiets: payload,
            };
        case GET_RECIPE_NAME:
            return {
                ...state,
                allRecipes: payload,
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
        case FILTER_DIETS:
            let filterDiets = state.recipesFilter.filter((recipes) => {
                if (recipes.diets) {
                    let aux = recipes.diets.includes(payload);
                    return aux;
                }
                else {
                    return null;
                }
            });
            return {
                ...state,
                allRecipes: filterDiets === 'all'
                    ? state.recipesFilter
                    : filterDiets
            };
        case ORDER_TITLE:
            let sortTitle = payload === 'ASC'
                ? state.allRecipes.sort((a, b) => {
                    if (a.title > b.title) {
                        return 1;
                    }
                    if (b.title > a.title) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                })
                : state.allRecipes.sort((a, b) => {
                    if (a.title > b.title) {
                        return -1;
                    }
                    if (b.title > a.title) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            return {
                ...state,
                allRecipes: sortTitle
            };
        case ORDER_SCORE:
            let sortScore = payload === 'MAX'
                ? state.allRecipes.sort((a, b) => {
                    if (a.healthScore < b.healthScore) {
                        return 1;
                    }
                    if (b.healthScore < a.healthScore) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                })
                : state.allRecipes.sort((a, b) => {
                    if (a.healthScore < b.healthScore) {
                        return -1;
                    }
                    if (b.healthScore < a.healthScore) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            return {
                ...state,
                allRecipes: sortScore
            };
        case CLEAN_RECIPES:
            return {
                ...state,
                recipesFilter: payload
            };
        case CLEAN_DETAILS:
            return {
                ...state,
                recipesDetails: payload
            };
        default: {
            return state
        };
    }
};

export default rootReducer;