import React from "react";
import {
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

function RenderStaff({ staff }) {
  if (staff != null) {
    return (
      <div className="row">
        <div className="col-md-4 col-lg-3 col-xs-12 table">
          <CardImg
            height="230px"
            width="220px"
            src={staff.image}
            alt={staff.name}
          />
        </div>
        <div className="col-md-8 col-lg-9 col-xs-12 table">
          <CardTitle>Họ và tên: {staff.name}</CardTitle>
          <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
          <CardText>
            Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
          </CardText>
          <CardText>Phòng ban: {staff.department.name}</CardText>
          <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
          <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const StaffDetail = (props) => {
  if (props.staff != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/staffs">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
          <hr />
        </div>
        <div className="row">
          <div className="col-12">
            <RenderStaff staff={props.staff} />
            <br />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default StaffDetail;
