const { Router } = require('express');
const { getTotalInfo } = require('../utils/index.js');
const { Recipe, Diet } = require('../db');

const router = Router();

// RUTA GET -> /recipes?name='' (query) -----------------------------
router.get('/', async (req, res) => {
    try {
        const { name } = req.query;
        let info = await getTotalInfo();

        if (name) {
            let recipeName = info.filter(r => r.title.toLowerCase() === name.toLowerCase());
            recipeName
                ? res.status(200).send(recipeName)
                : res.status(404).send('No existe esa receta')
        }
        else {
            res.status(200).send(info);
        }

    } catch (error) {
        console.log('ERROR EN RUTA GET A /recipes', error);
    }
}); // findAll


// RUTA GET -> /recipes/:id -------------------------------------
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let info = await getTotalInfo();

        if (id) {
            let recipeID = info.find(r => r.id == id);
            recipeID
                ? res.status(200).send(recipeID)
                : res.status(404).send('No se encontraron detalles de la receta')
        }

    } catch (error) {
        console.log('ERROR EN RUTA GET A /recipes/:id', error)
    }
}); // findOne o findByPk (Primary Key)


// RUTA POST -> /recipes (crear receta) ---------------------
router.post('/', async (req, res) => {
    try {
        const { title, summary, healthScore, steps, image, diets } = req.body;

        const newRecipe = await Recipe.create({
            title,
            summary,
            healthScore,
            steps,
            image,
        });

        const dietDB = await Diet.findAll({
            where: { name: diets }
        });

        if (!title) return res.status(400).send('La receta debe tener un título');
        if (!summary) return res.status(400).send('La receta debe tener un summary')

        newRecipe.addDiet(dietDB);
        res.status(200).send('¡La receta ha sido creada con éxito!')

    } catch (error) {
        console.log('ERROR EN RUTA POST A /recipes', error)
    }
});

//-------------------------------------------------------------------
module.exports = router;