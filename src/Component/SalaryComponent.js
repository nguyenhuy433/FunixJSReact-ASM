import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { Fade, Stagger } from "react-animation-components";

function RenderSalary({ salary }) {
  return (
    <Card className="style-sara">
      <CardBody>
        <CardTitle className="text-center">{salary.name}</CardTitle>
        <CardText>Mã nhân viên: {salary.id}</CardText>
        <CardText>Hệ số lương: {salary.salaryScale}</CardText>
        <CardText>Số ngày làm thêm: {salary.overTime}</CardText>
        <Breadcrumb className="style-saraly">
          Lương:{" "}
          {Number(
            salary.salaryScale * 3000000 + salary.overTime * 200000
          ).toFixed()}
        </Breadcrumb>
      </CardBody>
    </Card>
  );
}

/* class Salary extends Comment {
  constructor(props) {
    super(props);
    this.state = {
      salary: this.props.salary,
    };
  }
  render() {
    if (this.props.salary.isLoading) {
      return (<Loading />);
    } else if (this.props.salary.errMess) {
      return (<h4>{this.props.errMess}</h4>);
    } else if (this.state.salary != null) {
      const salarys = this.state.salary.salary.map((salary) => {
        return (
          <div className="row col-12 col-md-6 col-lg-4 mt-2 mb-1">
            <RenderSalary key={salary.id} salary={salary} />
          </div>
        );
      });

      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/staffs">Nhân Viên</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>Bảng Lương</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div>
            <div className="row m-1">{salarys}</div>
          </div>
        </div>
      );
    }
  }
} */

export default Salary;

function Salary(props) {
  if (props.isLoading) {
    return <Loading />;
  } else if (props.errMess) {
    return <h4>{props.errMess}</h4>;
  } else if (props.salary != null) {
    const salarys = props.salary.salary.map((salary) => {
      return (
        <div className="row col-12 col-md-6 col-lg-4 mt-2 mb-1">
          <RenderSalary key={salary.id} salary={salary} />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/staffs">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Bảng Lương</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div>
          <Stagger in>
            <Fade in>
              <div className="row m-1">{salarys}</div>
            </Fade>
          </Stagger>
        </div>
      </div>
    );
  }
}
