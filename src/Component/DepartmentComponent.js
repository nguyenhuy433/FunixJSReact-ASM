import React, { Component } from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import { Loading } from "./LoadingComponent";
import { Link } from "react-router-dom";

function RenderDept({ dept, staffs }) {
  return (
    <div className="style-dep">
      <Link to={`/department/${dept.id}`}>
        <Card>
          <CardTitle className="m-2">{dept.name}</CardTitle>
          <CardBody>
            <CardText>
              Số lượng nhân viên:{" "}
              {
                staffs.staffs.filter((staff) => staff.departmentId === dept.id)
                  .length
              }
            </CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: this.props.department.department,
      staffs: this.props.staffs,
    };
  }
  render() {
    const departments = this.state.department.map((department) => {
      return (
        <div className="col-12 col-md-6 col-lg-4 mt-3 mb-3" key={department.id}>
          <RenderDept
            key={department.id}
            dept={department}
            staffs={this.state.staffs}
          />
        </div>
      );
    });

    if (this.props.department.isLoading) {
      return <Loading />;
    } else if (this.props.department.errMess) {
      return <h4>{this.props.errMess}</h4>;
    } else
      return (
        <div className="container">
          <div className="row m-3">{departments}</div>
        </div>
      );
  }
}

export default Department;

/* function Department(props) {
  const departments = props.department.department.map((department) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-3 mb-3" key={department.id}>
        <RenderDept
          key={department.id}
          dept={department}
          staffs={props.staffs}
        />
      </div>
    );
  });

  if (props.isLoading) {
    return <Loading />;
  } else if (props.errMess) {
    return <h4>{props.errMess}</h4>;
  } else
    return (
      <div className="container">
        <div className="row m-3">{departments}</div>
      </div>
    );
}
 */
