import React, {Component} from 'react';

class UserRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: this.props.recipe.meal,
            edit: false
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

    render() {
        let { meal, mealThumb, ingredients, quantity, source } = this.props.recipe;

        const ingredientList = ingredients.map((ingredient, i) => (
            <li className='ingredient-list' key={i}>{ingredient}</li>
        ))
        const quantityList = quantity.map((quantity, i) => (
            <li className='ingredient-list' key={i}>{quantity}</li>
        ))
       
        return (
            <section className='recipe-container container'>
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
                    <section className='button-container'>
                        <button className='btn add-btn user-btns' onClick={this.removeRecipe}>Delete Recipe</button>
                        <button className='btn add-btn edit-btn' onClick={this.toggleEdit}>Edit Name</button>
                    </section>
                </section> 
                   
                    
                    
                 
            </section>
        )
    }
}

export default UserRecipe;