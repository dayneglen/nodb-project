import React, {Component} from 'react';
import Header from './Components/Header';
import RecipeGenerator from './Components/random-recipes/RecipeGenerator';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedRecipes: []
    }
  }

  addRecipe = recipe => {
    this.setState({selectedRecipes: [...this.state.selectedRecipes, recipe]});
  }

  removeRecipe = () => {

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <RecipeGenerator addRecipe={this.addRecipe}/>
      </div>
    );
  }
  
}

export default App;
