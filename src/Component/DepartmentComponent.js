import React from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

function RenderDept(props) {
  return (
    <Card className="style-dep">
      <CardTitle className="m-2">{props.dep.name}</CardTitle>
      <CardBody>
        <CardText>Số lượng nhân viên: {props.dep.numberOfStaff}</CardText>
      </CardBody>
    </Card>
  );
}

function Department(props) {
  const departments = props.dep.map((department) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-3 mb-3" key={department.id}>
        <RenderDept dep={department} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row m-3 ">{departments}</div>
    </div>
  );
}
export default Department;
