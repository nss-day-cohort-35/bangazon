import React, { Component } from 'react';
import EmployeeDetails from './EmployeeDetails'
import { Card } from 'semantic-ui-react'

export default class EmployeeCard extends Component {
    // state = {
    // }

    // toggle = () => {
    //     this.setState(prevState => ({
    //         details: !prevState.details
    //     }))
    // }

    render() {

        return (
            <>
                <div>
                    <Card href="#employeeDetails">
                        <h4>
                            {this.props.employee.firstName} {this.props.employee.lastName}
                        </h4>
                            Title:
                            <br></br>
                            Department:
                    </Card>
                    <Card>
                        <EmployeeDetails
                            // isOpen={this.state.details}
                            // toggle={this.toggle}
                            employee={this.props.employee}
                            id={this.props.employee.id} />

                    </Card>
                </div>
            </>
        )
    }
}