import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this); // bind là ràng buộc dùng để xác định tham số this tronng function, nếu không dùng bind từ khóa this do function độc lập sẽ không tham chiếu về đối tượng được báo undefind
  }

  toggleNav () {
      this.setState ({
          isNavOpen: !this.state.isNavOpen
      })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="/assets/images/logo.png"
                width="40"
                alt="Quan Ly Nhan Vien"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/staffs">
                    <span className="fa fa-users fa-lg" color="black"></span>{" "}
                    <b>Nhân Viên</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/department">
                    <span className="fa fa-address-card fa-lg"></span> <b>Phòng Ban</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/salary">
                    <span className="fa fa-money fa-lg"></span> <b>Bảng Lương</b>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;

