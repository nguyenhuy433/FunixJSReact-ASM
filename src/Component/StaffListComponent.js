import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  NavbarBrand,
} from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectednhanvien: null,
    };
  }
  onNhanvienSelect(nhanvien) {
    this.setState({ selectednhanvien: nhanvien });
  }

  renderNhanvien(nhanvien) {
    if (nhanvien != null) {
      return (
        <div className="col-xs-12 col-md-6 col-lg-4">
          <Card className="styleTen">
            <CardTitle>Họ và tên: {nhanvien.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(nhanvien.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(nhanvien.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {nhanvien.department}</CardText>
            <CardText>Số ngày nghỉ còn lại: {nhanvien.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm: {nhanvien.overTime}</CardText>
          </Card>
        </div>
      );
    } else {
      return (
        <div className="container">
          <NavbarBrand>Bấm vào tên nhân viên để xem thông tin </NavbarBrand>
        </div>
      );
    }
  }

  render() {
    const menu = this.props.staff.map((nhanvien) => {
      return (
        <div className="col-xs-12 col-lg-4 col-md-6">
          <Card
            className="styleTen"
            key={nhanvien.id}
            onClick={() => this.onNhanvienSelect(nhanvien)}
          >
            <div>
              <CardTitle>{nhanvien.name}</CardTitle>
            </div>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>

        <div className="row">
          {this.renderNhanvien(this.state.selectednhanvien)}
        </div>
      </div>
    );
  }
}

export default StaffList;
