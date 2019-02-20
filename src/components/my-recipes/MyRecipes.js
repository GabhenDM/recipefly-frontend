import React, { Component } from 'react'
import RecipeCard from "../common/RecipeCard";
import { Link } from "react-router-dom";
import "./MyRecipes.css";



export default class MyRecipes extends Component {
  render() {
    return (
        <main role="main">
        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">My Recipes</h1>
            <p class="lead text-muted">
              View and edit your own recipes!
            </p>
          </div>
        </section>
        <div class="album py-5 bg-light">
           
          <div class="container">
            <Link className="btn btn-primary btn-lg addRecipeButton" to="/add-recipe">
            Add new Recipe
            </Link>
            <div class="row">
            
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
