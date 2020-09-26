import React, {Component} from 'react';
import Header from './Components/Header';
import RecipeGenerator from './Components/random-recipes/RecipeGenerator';
import RecipesCollection from './Components/user-recipes/RecipesCollection';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedRecipes: []
    }
  }

  componentDidMount(){
    axios.get('/api/recipes').then(res => {
      this.setState({selectedRecipes: res.data});
    }).catch(err => console.log(err));
  }

  addRecipe = recipe => {
    axios.post('/api/recipes', recipe).then(res => {
      this.setState({ selectedRecipes: res.data });
    }).catch(err => console.log(err)); 
  }

  removeRecipe = (id) => {
    axios.delete(`/api/recipes/${id}`).then(res => {
      this.setState({selectedRecipes: res.data});
    }).catch(err => console.log(err));
  }

  changeName = (id, meal) => {
    axios.put(`/api/recipes/${id}`, {meal}).then(res => {
      this.setState({ selectedRecipes: res.data});
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <RecipeGenerator addRecipe={this.addRecipe}/>
        <h1>Your Recipes</h1>
        <RecipesCollection recipes={this.state.selectedRecipes}
        deleteRecipe={this.removeRecipe}
        changeName={this.changeName}/>
      </div>
    );
  }
  
}

export default App;
