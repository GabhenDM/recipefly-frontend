import React, { Component } from "react";
import RecipeCard from "../common/RecipeCard";

export default class Browse extends Component {
  render() {
    return (
      <main role="main">
        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Browse Recipes</h1>
            <p class="lead text-muted">
              Browse Recipes shared by users worldwide!
            </p>
          </div>
        </section>
        <div class="album py-5 bg-light">
          <div class="container">
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
    );
  }
}
