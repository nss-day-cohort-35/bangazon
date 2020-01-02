import React, { Component } from 'react';
// import { Card } from 'semantic-ui-react'

export default class EmployeeCard extends Component {
    render() {

        return (
            <>
                <div>
                    <h4>{this.props.employee.firstName} {this.props.employee.lastName}</h4>
                    <h5>Title: 
                        <br></br>
                        Department: </h5>
                </div>
            </>
        )
    }
}