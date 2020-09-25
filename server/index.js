const express = require ('express');
const randomRecipeCtrl = require('./controllers/random-recipe-controller');
const recipeCtrl = require('./controllers/recipeController');

const app = express();

app.use(express.json());

//Endpoint for random recipe api generator
app.get('/api/random-recipes', randomRecipeCtrl.getRandomRecipe);

//Endpoint for api
app.get('/api/recipes', recipeCtrl.getRecipes);
app.post('/api/recipes', recipeCtrl.addRecipe);
app.delete('/api/recipes/:id', recipeCtrl.deleteRecipe);
app.put('/api/recipes/:id', recipeCtrl.addIngredient);

app.listen('3333', () => console.log('Listening on port 3333'));