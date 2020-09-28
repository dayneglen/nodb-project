import React, {Component} from 'react';
import Header from './Components/Header';
import RecipeGenerator from './Components/random-recipes/RecipeGenerator';
import RecipesCollection from './Components/user-recipes/RecipesCollection';
import Footer from './Components/Footer';
import axios from 'axios';
import './reset.css';
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

  handleFavoriteChange = (id, isFavorite) => {
    axios.put(`/api/favorites/${id}`, {isFavorite}).then(res => {
      this.setState({ selectedRecipes: res.data})
    }).catch(err => console.log(err));
  }

  findFavorites = (getRecipes) => {
    if (getRecipes === 'all') {
      axios.get('/api/recipes').then(res => {
        this.setState({ selectedRecipes: res.data });
      }).catch(err => console.log(err));
    } else {
      axios.get('api/favorites').then(res => {
        this.setState({ selectedRecipes: res.data });
      }).catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <RecipeGenerator addRecipe={this.addRecipe}/>
        <RecipesCollection recipes={this.state.selectedRecipes}
        deleteRecipe={this.removeRecipe}
        changeName={this.changeName}
        favoriteChange={this.handleFavoriteChange}
        findFavorites={this.findFavorites}/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
