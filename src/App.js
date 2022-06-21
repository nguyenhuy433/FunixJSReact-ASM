import { Navbar, NavbarBrand } from "reactstrap";
import React, { Component } from "react";
import "./App.css";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import DishDetail from "./components/DishDetailComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.stage = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.stage.dishes} />
      </div>
    );
  }
}

export default App;
