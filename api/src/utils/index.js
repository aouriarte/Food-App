const axios = require('axios');
const { Recipe, Diet } = require('../db.js');
const { API_KEY2 } = process.env;

// GET API INFO ------------------------------------------------------
const getApiInfo = async () => {
    try {
        // me traigo 100 recetas:
        let info = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&number=100&addRecipeInformation=true`)

        let recipes = info.data.results.map(r => {
            return {
                id: r.id,
                title: r.title,
                image: r.image,
                summary: r.summary,
                healthScore: r.healthScore,
                diets: r.diets,
                steps: (r.analyzedInstructions[0] && r.analyzedInstructions[0].steps ? r.analyzedInstructions[0].steps.map(e => e.step).join("| ") : 'No hay pasos')
            }
        });
        return recipes;

    } catch (error) {
        console.log('ERROR EN getApiInfo/utils', error);
    }
};


// GET DB INFO -------------------------------------------------------
const getDBInfo = async () => {
    try {
        return await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        });
    } catch (error) {
        console.log('ERROR EN getDBInfo/utils', error);
    }
};


// GET TOTAL INFO (API + DB) -----------------------------------------
const getTotalInfo = async () => {
    try {
        const apiInfo = await getApiInfo();
        const dbInfo = await getDBInfo();
        return [...apiInfo, ...dbInfo];

    } catch (error) {
        console.log('ERROR EN getTotalInfo', error);
    }
};


// GET ALL DIETS 
const getAllDiets = async () => {
    try {
        // si ya está cargada mi db no hago nada
        const preDiets = await Diet.findAll();
        if (preDiets.length) {
            return preDiets;
        }

        const typesDiets = [
            "gluten free",
            "dairy free",
            "ketogenic",
            "vegetarian",
            "lacto vegetarian",
            "lacto ovo vegetarian",
            "ovo vegetarian",
            "vegan",
            "pescatarian",
            "paleolithic",
            "primal",
            "fodmap friendly",
            "whole 30",
        ];

        typesDiets.forEach(diet => {
            Diet.findOrCreate({
                where: { name: diet }
            });
        });

        let diets = await Diet.findAll();
        return diets;

    } catch (error) {
        console.log('ERROR EN getAllDiets/utils', error);
    }
};

//----------------------------------------------------------------------
module.exports = { getApiInfo, getDBInfo, getTotalInfo, getAllDiets }
