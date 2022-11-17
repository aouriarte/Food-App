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
    CLEAN_DETAILS,
    FILTER_CREATED,
    CHANGE_PAGE
} from './actions.js';

const initialState = {
    recipes: [],
    allRecipes: [],
    recipesDetails: {},
    allDiets: [],

    recipesPerPage: 9,
    currentPage: 1
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: payload,
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
                recipes: payload,
                currentPage: 1
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
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: Number(payload) ? parseInt(payload) : payload === 'Next' ? (parseInt(state.currentPage) + 1) : (parseInt(state.currentPage) - 1)
            };
        case FILTER_DIETS:
            let copyAll = state.allRecipes;
            let filterDiets = payload === "all"
                ? copyAll
                : copyAll.filter((r) => r.diets.includes(payload));
            return {
                ...state,
                recipes: filterDiets,
                currentPage: 1
            };
        case ORDER_TITLE:
            let sortTitle = payload === 'ASC'
                ? state.recipes.sort((a, b) => {
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
                : state.recipes.sort((a, b) => {
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
                recipes: sortTitle,
                currentPage: 1
            };
        case ORDER_SCORE:
            let sortScore = payload === 'MAX'
                ? state.recipes.sort((a, b) => {
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
                : state.recipes.sort((a, b) => {
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
                recipes: sortScore,
                currentPage: 1
            };
        case CLEAN_RECIPES:
            return {
                ...state,
                recipes: []
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