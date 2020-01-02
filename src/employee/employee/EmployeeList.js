import React, { Component } from 'react';
import APIManager from '../../api/APIManager';
import EmployeeCard from './EmployeeCard';
import EmployeeDetails from './EmployeeDetails'

export default class EmployeeList extends Component {
    state = {
        employees: [],
        storedEmployee: sessionStorage.getItem("employeeSearch").split(" ")
    }

    

    // componentWillMount() {
    //     this.setState({
    //         storedEmployee: this.storedEmployeeString
    //     })
    // }
    componentDidMount() { 
    APIManager.searchForEmployeeByName(this.state.storedEmployee[0], this.state.storedEmployee[1])
            .then(response => {
        this.setState({
            employees: response
        })
    })
    }


render() {

    console.log("stored employee:", this.state.storedEmployee[0], this.state.storedEmployee[1])
    console.log("employee returned:", this.state.employees[0])
    return (
        <>
            {this.state.employees.map(employee => (
            <EmployeeCard
            key={employee.id}
            employee={employee}
            />
            ))}
            <div>
                <EmployeeDetails />
            </div>
        </>
    )
}
}