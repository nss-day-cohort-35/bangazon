import React, { Component } from 'react';
import EmployeeDetails from './EmployeeDetails'
import { Card } from 'semantic-ui-react'

export default class EmployeeCard extends Component {
    state = {
        visible: false,
    }


    employeeDetailsToggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }


    render() {

        return (
            <>
                <div>
                    <Card
                        link
                        onClick={() => {
                            this.employeeDetailsToggle()
                        }}>
                        <h4>
                            {this.props.employee.firstName} {this.props.employee.lastName}
                        </h4>
                        Title:
                            <br></br>
                        Department:
                    </Card>
                    {this.state.visible === true ?
                        <>
                            <Card>
                                <EmployeeDetails
                                    employee={this.props.employee}
                                    id={this.props.employee.id} />
                            </Card>
                        </>
                        : null
                    }
                </div>
            </>
        )
    }
}