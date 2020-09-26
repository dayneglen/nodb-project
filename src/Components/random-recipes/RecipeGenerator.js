import React, { Component } from 'react';
import RandomRecipe from './RandomRecipe';
import axios from 'axios';

class RecipeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generatedRecipes: []
        }
    }

    componentDidMount() {
        this.getRandomRecipe();
    }

    getRandomRecipe = () => {
        axios.get('/api/random-recipes').then(res => {
            this.setState({ generatedRecipes: res.data });
        }).catch(err => console.log(err));
    }

    render() {
        const randomRecipe = this.state.generatedRecipes.map((recipe, i) => (
            <RandomRecipe key={i} recipe={recipe} newRecipes={this.getRandomRecipe} addRecipe={this.props.addRecipe} />
        ))
        return (
            <section className='container'>
                {randomRecipe}
            </section>
        )
    }
}

export default RecipeGenerator;