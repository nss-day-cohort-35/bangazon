import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import EmployeeList from './EmployeeList'

export default class EmployeeLanding extends Component {

    render() {

        return (
            <>
            <Button>Hi</Button>
                <EmployeeList />
            </>

        )
    }
}