import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import EmployeeList from './EmployeeList'

export default class EmployeeLanding extends Component {
    render() {
        return (
            <>
                <Button color="orange">Add New Employee</Button>
                <EmployeeList />
            </>

        )
    }
}