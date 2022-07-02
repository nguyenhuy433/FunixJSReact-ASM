import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DEPARTMENTS, STAFFS } from "../shared/staff";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Department from "./DepartmentComponent";
import Saraly from "./SaralyComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      department: DEPARTMENTS,
    };
    this.addStaff = this.addStaff.bind(this);
  }
  // them nhan vien
  addStaff = (staff) => {
    const id = this.state.staffs.length;
    const newStaff = { id, ...staff };
    this.setState({ staffs: [...this.state.staffs, newStaff] });
    console.log(newStaff);
    STAFFS.push(newStaff);
    console.log(STAFFS);
  };

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            STAFFS.filter(
              (staff) => staff.id === parseInt(match.params.staffid, 10)
            )[0]
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/staffs"
            component={() => (
              <StaffList addStaff={this.addStaff} staffs={this.state.staffs} />
            )}
          />
          <Route path="/staffs/:staffid" component={StaffWithId} />
          <Route
            exact
            path="/department"
            component={() => <Department dep={this.state.department} />}
          />
          <Route
            exact
            path="/salary"
            component={() => <Saraly staffs={this.state.staffs} />}
          />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
