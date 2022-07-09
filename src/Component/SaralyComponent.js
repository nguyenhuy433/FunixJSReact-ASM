import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderSaraly({ staff }) {
  return (
    <Card className="style-sara">
      <CardBody>
        <CardTitle>{staff.name}</CardTitle>
        <CardText>Mã nhân viên: {staff.id}</CardText>
        <CardText>Hệ số lương: {staff.salaryScale}</CardText>
        <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
        <Card className="style-saraly">
          Lương:{" "}
          {(staff.salaryScale * 3000000 + staff.overTime * 200000).toFixed(0)}
        </Card>
      </CardBody>
    </Card>
  );
}

function Saraly(props) {
  const saralys = props.staffs.map((staff) => {
    return (
      <div className="row col-xs-12 col-md-6 col-lg-4 mt-1 mb-1" key={staff.id}>
        <RenderSaraly staff={staff} />
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
      <div className="row m-1">{saralys}</div>
    </div>
  );
}
export default Saraly;
