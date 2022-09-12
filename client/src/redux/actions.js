import axios from 'axios';

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_ALL_DIETS = 'GET_ALL_DIETS';
export const GET_RECIPE_NAME = 'GET_RECIPE_NAME';
export const GET_RECIPE_DETAILS = 'GET_RECIPE_DETAILS';
export const POST_RECIPE = 'POST_RECIPE';


// ALL RECIPES: Traigo recetas -> BACK ---------------------------------------------
export const getAllRecipes = () => {
    return async (dispatch) => {
        try {
            let infoAll = await axios.get('http://localhost:3001/recipes');
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
            let infoName = await axios.get(`http://localhost:3001/recipes?name=${name}`);
            dispatch({ type: GET_RECIPE_NAME, payload: infoName.data });

        } catch (error) {
            console.log('ERROR EN getRecipeName/actions', error);
        }
    };
};


// DETAILS: Traigo a la receta y sus datos desde el ID -----------------------------
export const getRecipeDetail = (id) => {
    return async (dispatch) => {
        try {
            let infoDetails = await axios.get(`http://localhost:3001/recipes${id}`);
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
            let newRecipe = await axios.post('http://localhost:3001/recipes', payload);
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
            let diets = await axios.get('http://localhost:3001/diets');
            dispatch({ type: GET_ALL_DIETS, payload: diets.data });

        } catch (error) {
            console.log('ERROR EN getAllDiets', error)
        }
    };
};