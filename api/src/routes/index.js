const { Router } = require('express');
const recipes = require('./recipes.js');
const diets = require('./diets.js');

const router = Router();

// Configurar los routers
router.use('/recipes', recipes);
router.use('/diets', diets);

module.exports = router;
