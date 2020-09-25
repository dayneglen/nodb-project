let recipes = [];
let id = 1;

module.exports = {
    getRecipes(req, res) {
        res.status(200).send(recipes);
    },
    addRecipe(req, res) {
        let {meal, instructions, mealThumb, ingredients, quantity, source} = req.body;

        let recipe = {
            id: id,
            meal: meal,
            instructions: instructions,
            mealThumb: mealThumb,
            ingredients: ingredients,
            quantity: quantity,
            source: source
        }
        recipes.push(recipe);
        id++;
        res.status(200).send(recipes);
    },
    deleteRecipe(req, res) {
        let { id } = req.params;
        let index = recipes.findIndex((element) => element.id === +id);
        recipes.splice(index, 1);

        res.status(200).send(recipes);
    },
    addIngredient(req, res) {
        let { id } = req.params;
        let { ingredient, quantity } = req.body;
        let recipeToChange = recipes.find((element) => element.id === +id);
        recipeToChange.ingredients.push(ingredient);
        recipeToChange.quantity.push(quantity);

        res.status(200).send(recipes);
    }
}