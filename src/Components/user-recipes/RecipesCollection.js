import React from 'react';
import UserRecipe from './UserRecipe';

const RecipesCollection = (props) => {
    const { recipes } = props;

    let recipesDisplay = recipes.map((recipe, i) => (
        <UserRecipe key={i} recipe={recipe}
        deleteRecipe={props.deleteRecipe}
        changeName={props.changeName}/>
    ))
    return (
        <section className='container'>
            {recipesDisplay}
        </section>
    )
}

export default RecipesCollection;