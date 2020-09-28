import React, {Component} from 'react';

class FilterRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.findFavorites(this.state.value)
    }


    render(){
        return(
            <form className='filter-form'>
                <label htmlFor='recipeFilter' className='filter-label'>Filter Recipes By:</label>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value='all'>All Recipes</option>
                    <option value='favorites'>Favorites</option>
                </select>
                <button  className='btn filter-btn' onClick={this.handleSubmit} type='submit'>Filter Recipes</button>
            </form>
            
        )
    }
}

export default FilterRecipes;