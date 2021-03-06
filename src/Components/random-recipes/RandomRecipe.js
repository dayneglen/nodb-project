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
            <h2 className='meal-name'>{meal}</h2>
            <a href={source} className='recipe-link'>
                <img src={mealThumb} alt={meal} className='recipe-img' />
            </a>
            <ul className='ingredient-container'>
                <div className='quantity'>
                    {quantityList}
                </div>
                <div className='ingredients'>
                    {ingredientList}
                </div>
            </ul>
            <hr/>
            <section className='button-container'>
                <button className='btn add-btn' onClick={recipeReset}>Add Recipe</button>
            </section>
        </section>
    )
}

export default RandomRecipe;