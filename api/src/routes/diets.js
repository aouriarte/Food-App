const { Router } = require('express');
const { getAllDiets } = require('../controllers/index.js');

const router = Router();

// RUTA GET -> /diets ------------------------------------------
router.get('/', async (req, res) => {
    try {
        let diets = await getAllDiets();
        res.status(200).send(diets);

    } catch (error) {
        console.log('ERROR EN RUTA GET A /diets', error)
    }
});

module.exports = router;