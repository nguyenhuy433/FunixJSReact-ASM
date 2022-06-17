import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import StaffList from "./Component/StaffListComponent";
import { STAFFS } from "./shared/staff";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staff: STAFFS,
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffList staff={this.state.staff} />
      </div>
    );
  }
}

export default App;
