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
} from "reactstrap";
import { Link } from "react-router-dom";

class StaffList extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  // open modal them nhan vien
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    const staffList = this.props.staffs.map((staff) => {
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
            <Form className="form-search">
              <FormGroup className="row">
                <div className=" col-10 col-md-8">
                  <Input type="text" className="form-control" />
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
          <ModalBody></ModalBody>
        </Modal>
        <div className="row">{staffList}</div>
      </div>
    );
  }
}

export default StaffList;
