import React from 'react';

const RandomRecipe = (props) => {
    let { meal, mealThumb, ingredients, quantity, source } = props.recipe;

    const ingredientList = ingredients.map((ingredient, i) => (
        <li className='ingredient-list' key={i}>{ingredient}</li>
    ))
    const quantityList = quantity.map((quantity, i) => (
        <li className='ingredient-list' key={i}>{quantity}</li>
    ))

    const recipeReset = () => {
        let { addRecipe, recipe, newRecipes } = props;
        addRecipe(recipe);
        newRecipes();
    }

    return (
        <section className='recipe-container'>
            <h2>{meal}</h2>
            <a href={source}>
                <img src={mealThumb} alt={meal} className='recipe-img' />
            </a>
            <ul className='ingredient-container'>
                <div>
                    {quantityList}
                </div>
                <div>
                    {ingredientList}
                </div>
            </ul>
            <section className='button-container'>
                <button className='btn' onClick={recipeReset}>Add Recipe</button>
            </section>
        </section>
    )
}

export default RandomRecipe;