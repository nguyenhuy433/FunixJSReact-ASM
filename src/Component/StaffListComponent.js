import React, { Component } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

class StaffList extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      selectedStaff: null,
    };
  }

  onStaffSelect(staff) {
    this.setState({
      selectedStaff: staff,
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

    return (
      <div className="container">
        <div className="row">
          <h2 className="style-text">Nhân Viên</h2>
        </div>
        <hr />
        <div className="row">{staffList}</div>
      </div>
    );
  }
}

export default StaffList;
