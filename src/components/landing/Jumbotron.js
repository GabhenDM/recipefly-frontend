import React from "react";

export default function Jumbotron() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Welcome to Recipefly!</h1>
        <p class="lead">
          Keep track of all your family Recipes and discover new ones!
        </p>
        <hr class="my-4" />
        <p>Sign up today and start cooking!</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Sign-up
        </a>
      </div>
    </div>
  );
}
