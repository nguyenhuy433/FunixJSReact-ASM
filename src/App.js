import React, { Component } from "react";
import "./App.css";
import Main from "./Component/MainComponent";
import { STAFFS } from "./shared/staff";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { staffs: STAFFS };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
