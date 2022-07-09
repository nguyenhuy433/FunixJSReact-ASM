import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Form,
  FormGroup,
  Row,
  Label,
  Button,
  Input,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from "./LoadingComponent";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: this.props.staffs.staffs,
      findStaff: "",
      isModalOpen: false,
    };
    this.handlefindStaff = this.handlefindStaff.bind(this);
    this.FindStaff = this.FindStaff.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

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
    const staffList = this.state.staffs
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

    if (this.props.staffs.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.staffs.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.errMess}</h4>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mt-4">
              <div className="row">
                <div className="col-10 col-md-8">
                  <h3>Nhân Viên</h3>
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
                    <Button className="button" type="submit">
                      Tìm
                    </Button>
                  </div>
                </FormGroup>
              </Form>
            </div>
          </div>
          <hr />
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Thêm Nhân Viên</ModalHeader>
            <ModalBody>
              <LocalForm>
                <Row className="form-group">
                  <div className="col-12 col-md-4">
                    <Label htmlFor="name">Tên nhân viên</Label>
                  </div>
                  <div className="col-12 col-md-8">
                    <Col>
                      <Control.text
                        model=".name"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Tên Nhân Viên"
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
                          required: " Yêu cầu nhập ",
                          minLength: "Tên nhân viên phải nhiều hơn 2 ký tự",
                          maxLength: "Tên nhân viên phải ít hơn 30 ký tự",
                        }}
                      />
                    </Col>
                  </div>
                </Row>

                <Row className="form-group">
                  <div className="col-12 col-md-4">
                    <Label htmlFor="doB">Ngày sinh</Label>
                  </div>

                  <div className="col-12 col-md-8">
                    <Col>
                      <Control
                        type="date"
                        model=".doB"
                        id="doB"
                        name="doB"
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
                    </Col>
                  </div>
                </Row>

                <Row className="form-group">
                  <div className="col-12 col-md-4">
                    <Label htmlFor="startDate">Ngày vào công ty</Label>
                  </div>
                  <div className="col-12 col-md-8">
                    <Col>
                      <Control
                        type="date"
                        model=".startDate"
                        id="startDate"
                        name="startDate"
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
                    </Col>
                  </div>
                </Row>

                <Row className="form-group">
                  <div className="col-12 col-md-4">
                    <Label htmlFor="department">Phòng ban</Label>
                  </div>
                  <div className="col-12 col-md-8">
                    <Col>
                      <Control.select
                        model=".departmentId"
                        id="departmentId"
                        name="departmentId"
                        defaultValue="Dept01"
                        className="form-control"
                      >
                        <option value="Dept01">Sale</option>
                        <option value="Dept02">HR</option>
                        <option value="Dept03">Marketing</option>
                        <option value="Dept04">IT</option>
                        <option value="Dept05">Finance</option>
                      </Control.select>
                    </Col>
                  </div>
                </Row>

                <Row className="form-group">
                  <div className="col-12 col-md-4">
                    <Label htmlFor="salaryScale">Hệ số lương</Label>
                  </div>
                  <div className="col-12 col-md-8">
                    <Col>
                      <Control
                        type="number"
                        model=".salaryScale"
                        min="1"
                        max="3"
                        id="salaryScale"
                        name="salaryScale"
                        className="form-control"
                        defaultValue="1"
                        value={this.state.staffs.salaryScale}
                        validators={{
                          required,
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".salaryScale"
                        show="touched"
                        messages={{
                          required: "Hệ số lương từ 1.0 đến 3.0",
                        }}
                      />
                    </Col>
                  </div>
                </Row>

                <Row className="form-group">
                  <div className="col-12 col-md-4">
                    <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                  </div>
                  <div className="col-12 col-md-8">
                    <Col>
                      <Control
                        type="number"
                        model=".annualLeave"
                        min="0"
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
                          required: "Yêu cầu nhập ",
                        }}
                      />
                    </Col>
                  </div>
                </Row>

                <Row className="form-group">
                  <div className="col-12 col-md-4">
                    <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                  </div>
                  <div className="col-12 col-md-8">
                    <Col>
                      <Control
                        type="number"
                        model=".overTime"
                        min="0"
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
                          required: "Yêu cầu nhập",
                        }}
                      />
                    </Col>
                  </div>
                </Row>
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
}

export default StaffList;
