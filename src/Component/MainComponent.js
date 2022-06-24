import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DEPARTMENTS, STAFFS } from "../shared/staff";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Department from "./DepartmentComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      department: DEPARTMENTS,
    };
  }

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
            component={() => <StaffList staffs={this.state.staffs} />}
          />
          <Route path="/staffs/:staffid" component={StaffWithId} />
          <Route
            exact
            path="/department"
            component={() => <Department dep={this.state.department} />}
          />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
