import React, {Component} from 'react';

class UserRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
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
            <section className='recipe-container'>
                {this.state.edit 
                    ? <form>
                        <input value={this.state.userInput} onChange={ (e) => this.handleInput(e)} />
                        <button type='submit' onClick={this.editName}>Edit Name</button>
                    </form>
                : <h2>{meal}</h2>}
                
                <a href={source}>
                    <img src={mealThumb} alt={meal} className='recipe-img' />
                </a>
        
                <section className='ingredients'>
                    <ul className='ingredient-container'>
                        <div>
                            {quantityList}
                        </div>
                        <div>
                            {ingredientList}
                        </div>
                    </ul>
                    <section className='button-container'>
                        <button className='btn' onClick={this.removeRecipe}>Delete Recipe</button>
                        <button className='btn' onClick={this.toggleEdit}>Edit Ingredients</button>
                    </section>
                </section> 
                   
                    
                    
                 
            </section>
        )
    }
}

export default UserRecipe;