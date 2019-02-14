import React, { Component } from "react";
import Marketing from "./Marketing";
import Featurette from "./Featurette";
import Jumbotron from "./Jumbotron";

export default class Landing extends Component {
  render() {
    return (
      <main role="main">
        <Jumbotron />
        <div class="container marketing">
          <Marketing />
          <Featurette />
        </div>
      </main>
    );
  }
}
