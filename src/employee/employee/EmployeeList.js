import React, { Component } from 'react';
import APIManager from '../../api/APIManager';
import EmployeeCard from './EmployeeCard';

export default class EmployeeList extends Component {
    state = {
        employees: [],
    }

    employeeSearch = () => {
        APIManager.searchForEmployeeByName(this.state.value)
            .then((userResult) => {

            })
    }

    render() {
        return (
            <>
                <p>Employee List</p>
                <EmployeeCard />
            </>
        )
    }
}