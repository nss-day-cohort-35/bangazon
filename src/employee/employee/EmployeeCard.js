import React, { Component } from 'react';
import EmployeeDetails from './EmployeeDetails'
import { Card } from 'semantic-ui-react'

export default class EmployeeCard extends Component {
    state = {
        cardVisible: false,
    }


    employeeDetailsToggle = () => {
        if (this.state.cardVisible === false) {
            this.setState({
                cardVisible: true
            })
        } else {
            this.setState({
                cardVisible: false
            })
        }
    }


    render() {

        return (
            <>
                <div>
                    <Card
                        // link
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
                    {this.state.cardVisible === true ?
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