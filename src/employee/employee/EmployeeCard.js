import React, { Component } from 'react';
import EmployeeDetails from './EmployeeDetails'
import { Card } from 'semantic-ui-react'

export default class EmployeeCard extends Component {
    state = {
        details: false
    }

    // toggle = () => {
    //     this.setState(prevState => ({
    //         details: !prevState.details
    //     }))
    // }

    render() {

        return (
            <>
                <div>
                    <Card
                    href="#">
                        <h4>
                            {this.props.employee.firstName} {this.props.employee.lastName}
                        </h4>
                        <h5>
                            Title:
                            <br></br>
                            Department:
                        </h5>

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