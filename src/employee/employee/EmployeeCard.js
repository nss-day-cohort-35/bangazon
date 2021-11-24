import React, { Component } from 'react';
import EmployeeDetails from './EmployeeDetails'
import { Card, Divider } from 'semantic-ui-react'

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
                <div className='cardContainer'>
                    <Card
                        className='searchResultsCard'
                        link
                        onClick={() => {
                            this.employeeDetailsToggle()
                        }}>
                        <h4>
                            {this.props.employee.firstName} {this.props.employee.lastName}
                        </h4>
                        Title:
                            <br></br>
                        Department: {this.props.employee.departmentId}
                    </Card>
                    {this.state.cardVisible === true ?
                        <>
                            <Card className='detailsCard'>
                                <EmployeeDetails
                                    toggle={this.props.toggle}
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