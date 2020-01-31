import React, { Component } from 'react';
import EmployeeDetails from './EmployeeDetails'
import { Card, Reveal } from 'semantic-ui-react'

export default class EmployeeCard extends Component {
    state = {
        visible: false,
    }


    employeeDetailsToggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
        console.log("click", this.state.visible)
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
                            <Reveal animated='small fade'>
                                <Reveal.Content visible>
                                    <Card
                                        visible={this.state.visible.toString()}
                                    >

                                        <EmployeeDetails
                                            employee={this.props.employee}
                                            id={this.props.employee.id} />

                                    </Card>
                                </Reveal.Content>
                            </Reveal>
                        </>
                        : null
                    }
                </div>
            </>
        )
    }
}