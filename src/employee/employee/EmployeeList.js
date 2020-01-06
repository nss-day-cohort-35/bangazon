import React, { Component } from 'react';
import APIManager from '../../api/APIManager';
import EmployeeCard from './EmployeeCard';


export default class EmployeeList extends Component {
    state = {
        employees: [],
        storedEmployee: sessionStorage.getItem("employeeSearch").split(" ")
    }

    componentDidMount() {
        APIManager.searchForEmployeeByName(this.state.storedEmployee[0], this.state.storedEmployee[1])
            .then(response => {
                this.setState({
                    employees: response
                })
            })
    }

    // componentDidUpdate() {

    // }

    render() {
        return (
            <>
                <div>
                    {this.state.employees.map(employee => (
                        <EmployeeCard
                            key={employee.id}
                            employee={employee}
                        />
                    ))}
                </div>
            </>
        )
    }
}