import axios from 'axios';
import swal from "sweetalert";

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_ALL_DIETS = 'GET_ALL_DIETS';
export const GET_RECIPE_NAME = 'GET_RECIPE_NAME';
export const GET_RECIPE_DETAILS = 'GET_RECIPE_DETAILS';
export const POST_RECIPE = 'POST_RECIPE';

export const CHANGE_PAGE = 'CHANGE_PAGE';

export const FILTER_DIETS = 'FILTER_DIETS';
export const ORDER_TITLE = 'ORDER_TITLE';
export const ORDER_SCORE = 'ORDER_SCORE';
export const CLEAN_RECIPES = 'CLEAN_RECIPES';
export const CLEAN_DETAILS = 'CLEAN_DETAILS';


// ALL RECIPES: Traigo recetas -> BACK ---------------------------------------------
export const getAllRecipes = () => {
    return async (dispatch) => {
        try {
            let infoAll = await axios.get('/recipes');
            dispatch({ type: GET_ALL_RECIPES, payload: infoAll.data });

        } catch (error) {
            console.log('ERROR EN getAllRecipes/actions', error);
        }
    };
};

// NAME: Traigo a la receta por su nombre -------------------------------------------
export const getRecipeName = (name) => {
    return async (dispatch) => {
        try {
            let infoName = await axios.get(`/recipes?name=${name}`);
            dispatch({ type: GET_RECIPE_NAME, payload: infoName.data });

        } catch (error) {
            swal("Oops", "That recipe does not exist", "error");
            console.log('ERROR EN getRecipeName/actions', error);
        }
    };
};

// DETAILS: Traigo a la receta y sus datos desde el ID -----------------------------
export const getRecipeDetail = (id) => {
    return async (dispatch) => {
        try {
            let infoDetails = await axios.get(`/recipes/${id}`);
            dispatch({ type: GET_RECIPE_DETAILS, payload: infoDetails.data });

        } catch (error) {
            console.log('ERROR EN getRecipeId /actions', error);
        }
    };
};

// POST: Crear una receta a través de los datos que me pasen en el post (payload) -----
export const postRecipe = (payload) => {
    try {
        return async () => {
            let newRecipe = await axios.post('/recipes', payload);
            return newRecipe;
        };
    } catch (error) {
        console.log('ERROR EN postRecipe', error)
    }
};

// ALL DIETS: Traigo los tipos de dieta -> BACK ---------------------------------------
export const getAllDiets = () => {
    return async (dispatch) => {
        try {
            let diets = await axios.get('/diets');
            dispatch({ type: GET_ALL_DIETS, payload: diets.data });

        } catch (error) {
            console.log('ERROR EN getAllDiets', error)
        }
    };
};

// PAGINADO: Cambiar de página --------------------------------------------------------
export const changePage = (payload) => {
    return {
        type: CHANGE_PAGE,
        payload
    };
};

// Filtrados y Ordenamientos -----------------------------------------------------------
// Filtrar por DIETS:
export const filterDiets = (payload) => {
    return {
        type: FILTER_DIETS,
        payload
    };
};

// Ordenar por TITLE:
export const orderTitle = (payload) => {
    return {
        type: ORDER_TITLE,
        payload
    };
};

// Ordenar por HealthScore:
export const orderHealthScore = (payload) => {
    return {
        type: ORDER_SCORE,
        payload
    };
};

// Limpiar Filtrados y Ordenamientos
export const cleanRecipes = () => {
    return {
        type: CLEAN_RECIPES,
    };
};

// Limpiar Detalles 
export const cleanDetail = (payload) => {
    return {
        type: CLEAN_DETAILS,
        payload
    };
};

