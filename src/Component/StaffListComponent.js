import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Button,
  Form,
  FormGroup,
  FormFeedback,
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
      touched: {
        name: false,
        doB: false,
        department: false,
        startDate: false,
        salaryScale: false,
        annualLeave: false,
        overTime: false,
      },
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handlefindStaff = this.handlefindStaff.bind(this);
    this.FindStaff = this.FindStaff.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.handleNewStaff = this.handleNewStaff.bind(this);
  }

  handleNewStaff(event) {
    event.preventDefault();
    const staff = {
      name: this.state.name,
      doB: this.state.doB,
      startDate: this.state.startDate,
      salaryScale: this.state.salaryScale,
      department: this.state.department,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      image: "/assets/images/alberto.png",
    };
    if (!this.state.doB && !this.state.startDate && !this.state.name)
      this.setState({ touched: { doB: true, startDate: true, name: true } });
    else this.props.addStaff(staff);
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
  //input du lieu va validate
  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  validate(name, doB, startDate, salaryScale, annualLeave, overTime) {
    const errors = {
      name: "",
      doB: "",
      startDate: "",
      department: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
    };
    if (this.state.touched.name && name.length <= 0)
      errors.name = "Yêu cầu nhập";
    else if (this.state.touched.name && name.length < 2)
      errors.name = "Yêu cầu nhiều hơn 2 ký tự";
    else if (this.state.touched.name && name.length > 30)
      errors.name = "Yêu cầu ít hơn 30 ký tự";

    if (this.state.touched.doB && doB.length <= 0) errors.doB = "Yêu cầu nhập";

    if (this.state.touched.startDate && startDate.length <= 0)
      errors.startDate = "Yêu cầu nhập";

    if (this.state.touched.salaryScale && salaryScale == "")
      errors.salaryScale = "Yêu cầu nhập";
    else if (salaryScale < 1 || salaryScale > 3)
      errors.salaryScale = "Hệ số lương từ 1.0 đến 3.0";

    if (this.state.touched.annualLeave && annualLeave.length <= 0)
      errors.annualLeave = "Yêu cầu nhập";

    if (this.state.touched.overTime && overTime.length <= 0)
      errors.overTime = "Yêu cầu nhập";

    return errors;
  }
  render() {
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.startDate,
      this.state.salaryScale,
      this.state.annualLeave,
      this.state.overTime
    );

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
            <Form onSubmit={(value) => this.handleNewStaff(value)}>
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
                    valid={errors.name === ""}
                    invalid={errors.name !== ""}
                    onBlur={this.handleBlur("name")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </div>
              </FormGroup>

              <FormGroup className="row">
                <div className="col-12 col-md-4">
                  <Label htmlFor="doB">Ngày sinh </Label>
                </div>
                <div className="col-12 col-md-8">
                  <Input
                    type="date"
                    id="doB"
                    name="doB"
                    value={this.state.doB}
                    valid={errors.doB === ""}
                    invalid={errors.doB !== ""}
                    onBlur={this.handleBlur("doB")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.doB}</FormFeedback>
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
                    name="startDate"
                    value={this.state.startDate}
                    valid={errors.startDate === ""}
                    invalid={errors.startDate !== ""}
                    onBlur={this.handleBlur("starDate")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.startDate}</FormFeedback>
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
                    name="department"
                    value={this.state.department}
                    valid={errors.department === ""}
                    invalid={errors.department !== ""}
                    onBlur={this.handleBlur("department")}
                    onChange={this.handleInputChange}
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
                    name="salaryScale"
                    value={this.state.salaryScale}
                    valid={errors.salaryScale === ""}
                    invalid={errors.salaryScale !== ""}
                    onBlur={this.handleBlur("salaryScale")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.salaryScale}</FormFeedback>
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
                    name="annualLeave"
                    value={this.state.annualLeave}
                    valid={errors.annualLeave === ""}
                    invalid={errors.annualLeave !== ""}
                    onBlur={this.handleBlur("annualLeave")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.annualLeave}</FormFeedback>
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
                    name="overTime"
                    value={this.state.overTime}
                    valid={errors.overTime === ""}
                    invalid={errors.overTime !== ""}
                    onBlur={this.handleBlur("overTime")}
                    onChange={this.handleInputChange}
                  />
                </div>
                <FormFeedback>{errors.overTime}</FormFeedback>
              </FormGroup>
              <hr />
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
