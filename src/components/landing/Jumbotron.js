import React from "react";
import { Link } from "react-router-dom";

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

        <Link className="btn btn-primary btn-lg" to="/register">
            Sign Up
        </Link>

      </div>
    </div>
  );
}
