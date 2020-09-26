const axios = require('axios');

module.exports = {
    getRandomRecipe(req, res) {
        const recipes = [];

        axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(result => {
            let { meals } = result.data;
            let ingredients = [];
            let quantity = [];
            for (let key in meals[0]) {
                if (key.includes('strIngredient')) {
                    if (meals[0][key].trim()) {
                        ingredients.push(meals[0][key]);
                    }
                }
                if (key.includes('strMeasure')) {
                    if (meals[0][key].trim()) {
                        quantity.push(meals[0][key]);
                    }
                }
            }
            let recipe = {
                meal: meals[0].strMeal,
                instructions: meals[0].strInstructions,
                mealThumb: meals[0].strMealThumb,
                ingredients: ingredients,
                quantity: quantity,
                source: meals[0].strSource
            }
            recipes.push(recipe);
            axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(result => {
                let { meals } = result.data;
                let ingredients = [];
                let quantity = [];
                for (let key in meals[0]) {
                    if (key.includes('strIngredient')) {
                        if (meals[0][key].trim()) {
                            ingredients.push(meals[0][key]);
                        }
                    }
                    if (key.includes('strMeasure')) {
                        if (meals[0][key].trim()) {
                            quantity.push(meals[0][key]);
                        }
                    }
                }
                let recipe = {
                    meal: meals[0].strMeal,
                    instructions: meals[0].strInstructions,
                    mealThumb: meals[0].strMealThumb,
                    ingredients: ingredients,
                    quantity: quantity,
                    source: meals[0].strSource
                }
                recipes.push(recipe);
                res.status(200).send(recipes);
            }).catch(err => res.status(500).send(err));
        })
    }

}

