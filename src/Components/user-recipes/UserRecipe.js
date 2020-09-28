import React, {Component} from 'react';

class UserRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: this.props.recipe.meal,
            edit: false,
            isFavorite: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.recipe.meal !== this.state.userInput) {
            this.setState({userInput: this.props.recipe.meal})
        }
    }

    removeRecipe = () => {
        const { id } = this.props.recipe;
        const { deleteRecipe } = this.props;
        deleteRecipe(id);
    }

    toggleEdit = () => {
        this.setState({edit: !this.state.edit});
    }

    editName = (e) => {
        const {id} = this.props.recipe;
        const {userInput} = this.state;
        e.preventDefault();
        this.props.changeName(id, userInput);
        this.toggleEdit();
    }

    handleInput = (e) => {
       this.setState({userInput: e.target.value});
    }

    favoriteChange = () => {
        this.setState((state, props) => ({
            isFavorite: !props.recipe.favorite
        }));
        this.props.changeFavorite(this.props.recipe.id, !this.props.recipe.favorite);
    }

    render() {
        let { meal, mealThumb, ingredients, quantity, source } = this.props.recipe;

        const ingredientList = ingredients.map((ingredient, i) => (
            <li className='ingredient-list' key={i}>{ingredient}</li>
        ))
        const quantityList = quantity.map((quantity, i) => (
            <li className='ingredient-list' key={i}>{quantity}</li>
        ))
       
        return (
            <section className='recipe-container'>
                {this.state.edit 
                    ? <form className='name-form'>
                        <input value={this.state.userInput} onChange={ (e) => this.handleInput(e)} />
                        <button className='btn add-btn'type='submit' onClick={this.editName}>Change Name</button>
                    </form>
                : <h2 className='meal-name'>{meal}</h2>}
                <a href={source} className='recipe-link'>
                    <img src={mealThumb} alt={meal} className='recipe-img' />
                </a>
                <section className='ingredients'>
                    <ul className='ingredient-container'>
                        <div className='quantity'>
                            {quantityList}
                        </div>
                        <div className='ingredients'>
                            {ingredientList}
                        </div>
                    </ul>
                    <hr/>
                    <section className='button-container user-btns'>
                        <button className='btn add-btn' onClick={this.removeRecipe}>Delete Recipe</button>
                        <button className='btn add-btn edit-btn' onClick={this.toggleEdit}>Edit Name</button>
                    </section>
                    {this.state.isFavorite 
                        ? <button className='favorite-btn favorite' onClick={this.favoriteChange}>&#9734;</button>
                    : <button className='favorite-btn' onClick={this.favoriteChange}>&#9734;</button>
                    }
                    
                </section> 
                   
                    
                    
                 
            </section>
        )
    }
}

export default UserRecipe;