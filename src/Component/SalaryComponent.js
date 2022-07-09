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

function RenderSalary({ salary }) {
  return (
    <Card className="style-sara">
      <CardBody>
        <CardTitle className="text-center">{salary.name}</CardTitle>
        <CardText>Mã nhân viên: {salary.id}</CardText>
        <CardText>Hệ số lương: {salary.salaryScale}</CardText>
        <CardText>Số ngày làm thêm: {salary.overTime}</CardText>
        <Breadcrumb>
          Lương:{" "}
          {Number(
            salary.salaryScale * 3000000 + salary.overTime * 200000
          ).toFixed()}
        </Breadcrumb>
      </CardBody>
    </Card>
  );
}

function Salary(props) {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{this.props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.salary != null) {
    const displaysalary = props.salary.salary.map((salary) => {
      return (
        <div className="row col-xs-12 col-md-6 col-lg-4">
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
          <div className="row m-1">{displaysalary}</div>
        </div>
      </div>
    );
  }
}

export default Salary;
