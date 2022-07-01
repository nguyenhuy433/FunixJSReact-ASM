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
} from "reactstrap";
import { Link } from "react-router-dom";

class StaffList extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      isModalOpen: false,
      findStaff: "",
      name: "",
      doB: "",
      startDate: "",
      department: "sale",
      salaryScale: 1,
      annualLeave: 0,
      overTime: 0,
      salary: 30000,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handlefindStaff = this.handlefindStaff.bind(this);
    this.FindStaff = this.FindStaff.bind(this);
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

    console.log(staffList);
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
            <Form>
              <FormGroup className="row">
                <div className="col-12 col-md-4">
                  <Label htmlFor="name">Tên</Label>
                </div>
                <div className="col-12 col-md-8">
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                  />
                </div>
              </FormGroup>

              <FormGroup className="row">
                <div className="col-12 col-md-4">
                  <Label htmlFor="doB">Ngày sinh</Label>
                </div>
                <div className="col-12 col-md-8">
                  <Input
                    type="date"
                    id="doB"
                    name="name"
                    value={this.state.doB}
                  />
                </div>
              </FormGroup>

              <FormGroup className="row">
                <div className="col-12 col-md-4">
                  <Label htmlFor="startDate">Ngày vào công ty</Label>
                </div>
                <div className="col-12 col-md-8">
                  <Input
                    type="date"
                    id="startDate"
                    name="name"
                    value={this.state.startDate}
                  />
                </div>
              </FormGroup>

              <FormGroup className="row">
                <div className="col-12 col-md-4">
                  <Label htmlFor="department">Phòng ban</Label>
                </div>
                <div className="col-12 col-md-8">
                  <Input
                    type="select"
                    id="department"
                    name="name"
                    value={this.state.startDate}
                  >
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Input>
                </div>
              </FormGroup>

              <FormGroup className="row">
                <div className="col-12 col-md-4">
                  <Label htmlFor="salaryScale">Hệ số lương</Label>
                </div>
                <div className="col-12 col-md-8">
                  <Input
                    type="number"
                    id="salaryScale"
                    name="name"
                    value={this.state.salaryScale}
                  />
                </div>
              </FormGroup>

              <FormGroup className="row">
                <div className="col-12 col-md-4">
                  <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                </div>
                <div className="col-12 col-md-8">
                  <Input
                    type="number"
                    id="annualLeave"
                    name="name"
                    value={this.state.annualLeave}
                  />
                </div>
              </FormGroup>

              <FormGroup className="row">
                <div className="col-12 col-md-4">
                  <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                </div>
                <div className="col-12 col-md-8">
                  <Input
                    type="number"
                    id="overTime"
                    name="name"
                    value={this.state.overTime}
                  />
                </div>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Thêm
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
        <div className="row">{staffList}</div>
      </div>
    );
  }
}

export default StaffList;
