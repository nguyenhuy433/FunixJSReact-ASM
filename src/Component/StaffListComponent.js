import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Col,
  Row,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import { DEPARTMENTS } from "../shared/staff";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      findStaff: "",
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handlefindStaff = this.handlefindStaff.bind(this);
    this.FindStaff = this.FindStaff.bind(this);
    this.handleNewStaff = this.handleNewStaff.bind(this);
  }

  //them nhan vien
  handleNewStaff(value) {
    //event.preventDefault();
    const newStaff = {
      name: value.name,
      doB: value.doB,
      startDate: value.startDate,
      salaryScale: value.salaryScale,
      department: value.department,
      annualLeave: value.annualLeave,
      overTime: value.overTime,
      image: "/assets/images/alberto.png",
    };
    this.props.addStaff(newStaff);
  }

  // open modal them nhan vien
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  // tim kiem nhan vien

  FindStaff() {
    this.setState({
      findStaff: this.findStaff.value,
    });
  }

  handlefindStaff(event) {
    this.FindStaff();
    event.preventDefault();
  }

  render() {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => !val || val.length >= len;

    const staffList = this.props.staffs
      .filter((staff) => {
        if (this.state.findStaff === "") {
          return staff;
        } else if (
          staff.name.toLowerCase().includes(this.state.findStaff.toLowerCase())
        ) {
          return staff;
        } else {
          return 0;
        }
      })
      .map((staff) => {
        return (
          <div key={staff.id} className="col-md-4 col-lg-2 col-6 text-center">
            <Card className="mt-4">
              <Link to={`/staffs/${staff.id}`}>
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                <CardTitle>{staff.name}</CardTitle>
              </Link>
            </Card>
          </div>
        );
      });

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mt-4">
            <div className="row">
              <div className="col-10 col-md-8">
                <h2>Nhân Viên</h2>
              </div>
              <div className="col-2 col-md-4">
                <Button onClick={this.toggleModal}>
                  <span className="fa fa-plus fa-lg"></span>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-4">
            <Form className="form-search" onSubmit={this.handlefindStaff}>
              <FormGroup className="row">
                <div className=" col-10 col-md-8">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Tên nhân viên"
                    innerRef={(input) => (this.findStaff = input)}
                  />
                </div>
                <div className="col-2 col-md-4">
                  <Button className="button">Tìm</Button>
                </div>
              </FormGroup>
            </Form>
          </div>
        </div>

        <hr />
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Thêm Nhân Viên</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(value) => this.handleNewStaff(value)}>
              <Row className="form-group">
                <div className="col-12 col-md-4">
                  <Label htmlFor="name">Tên</Label>
                </div>
                <div className="col-12 col-md-8">
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(30),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập ",
                      minLength: "Yêu cầu nhiều hơn 2 ký tự",
                      maxLength: "Yêu cầu ít hơn 30 ký tự",
                    }}
                  />
                </div>
              </Row>

              <Row className="form-group">
                <div className="col-12 col-md-4">
                  <Label htmlFor="doB">Ngày sinh </Label>
                </div>
                <div className="col-12 col-md-8">
                  <Control
                    model=".doB"
                    type="date"
                    id="doB"
                    name="doB"
                    value={this.state.doB}
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập ",
                    }}
                  />
                </div>
              </Row>

              <Row className="form-group">
                <div className="col-12 col-md-4">
                  <Label htmlFor="startDate">Ngày vào công ty</Label>
                </div>
                <div className="col-12 col-md-8">
                  <Control
                    model=".startDate"
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={this.state.startDate}
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".startDate"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                    }}
                  />
                </div>
              </Row>

              <Row className="form-group">
                <div className="col-12 col-md-4">
                  <Label htmlFor="department">Phòng ban</Label>
                </div>
                <div className="col-12 col-md-8">
                  <Control.select
                    model=".department"
                    type="select"
                    name="department"
                    id="department"
                    defaultValue="Sale"
                    className="form-control"
                  >
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Control.select>
                </div>
              </Row>

              <Row className="form-group">
                <div className="col-12 col-md-4">
                  <Label htmlFor="salaryScale">Hệ số lương</Label>
                </div>
                <div className="col-12 col-md-8">
                  <Control
                    model=".salaryScale"
                    type="number"
                    id="salaryScale"
                    name="salaryScale"
                    className="form-control"
                    defaultValue="1"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".salaryScale"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập hệ số lương",
                    }}
                  />
                </div>
              </Row>

              <Row className="form-group">
                <div className="col-12 col-md-4">
                  <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                </div>
                <div className="col-12 col-md-8">
                  <Control
                    model=".annualLeave"
                    type="number"
                    id="annualLeave"
                    name="annualLeave"
                    className="form-control"
                    defaultValue="0"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".annualLeave"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập số ngày nghỉ còn lại ",
                    }}
                  />
                </div>
              </Row>

              <Row className="form-group">
                <div className="col-12 col-md-4">
                  <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                </div>
                <div className="col-12 col-md-8">
                  <Control
                    model=".overTime"
                    type="number"
                    id="overTime"
                    name="overTime"
                    className="form-control"
                    defaultValue="0"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".overTime"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập số ngày đã làm thêm",
                    }}
                  />
                </div>
              </Row>
              <hr />
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Thêm
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
        <div className="row">{staffList}</div>
      </div>
    );
  }
}

export default StaffList;
