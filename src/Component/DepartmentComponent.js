import React from "react";
import {Card, CardTitle, CardBody, CardText} from 'reactstrap';
import { Loading } from './LoadingComponent'
import { Link } from 'react-router-dom';

function RenderDept ({dept, staffs}) {
    return (
        <div>
        <Link to={`/department/${dept.id}`}>
            <Card>
                <CardTitle className='m-2'>{dept.name}</CardTitle>
                <CardBody>
                    <CardText>
                        Số lượng nhân viên: {staffs.staffs.filter(staff=>staff.departmentId===dept.id).length}
                    </CardText>
                </CardBody>
            </Card>
        </Link>
        </div>
    )
}

function Department (props) {
    const department = props.department.department.map((department) => {
        return(
            <div className="col-12 col-md-6 col-lg-4 mt-3 mb-3" key={department.id}>
                <RenderDept key={department.id} dept={department}  staffs={props.staffs} />
            </div>
        )
    });

    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    } else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{this.props.errMess}</h4>
                </div>
            </div>
        );
    } else 
    
    return(
        <div className="container">
            <div className="row m-3">
                {department}
            </div>
        </div>
    )
}
export default Department