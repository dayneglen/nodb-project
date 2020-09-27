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
            source: source,
            favorite: false
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
    changeName(req, res) {
        let { id } = req.params;
        let { meal } = req.body;
        let nameToChange = recipes.find((element) => element.id === +id);

        nameToChange.meal = meal;

        res.status(200).send(recipes);
    },
    toggleFavorite(req, res) {
        let { id } = req.params;
        let {isFavorite} = req.body;
        let recipe = recipes.find((recipe) => recipe.id === +id);

        recipe.favorite = isFavorite;
        res.status(200).send(recipes);
    },

    filterFavorite(req, res) {
        let filteredRecipes = recipes.filter(recipe => recipe.favorite);
        res.status(200).send(filteredRecipes);
    }
}