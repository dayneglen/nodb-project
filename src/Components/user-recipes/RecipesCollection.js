import React from 'react';
import UserRecipe from './UserRecipe';
import FilterRecipes from './FilterRecipes';

const RecipesCollection = (props) => {
    const { recipes } = props;

    let recipesDisplay = recipes.map((recipe, i) => (
        <UserRecipe key={i} recipe={recipe}
        deleteRecipe={props.deleteRecipe}
        changeName={props.changeName}
        changeFavorite={props.favoriteChange}/>
    ))
    return (
        <section className='user-recipe-container'>
            <section>
                <h1 className="user-recipes">Your Recipes</h1>
            </section>
            <FilterRecipes findFavorites={props.findFavorites}/>
            <section className='user-recipes-display'>
                {recipesDisplay}
            </section>
            
        </section>
    )
}

export default RecipesCollection;