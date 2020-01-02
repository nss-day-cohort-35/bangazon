import React, { Component } from 'react';
import APIManager from '../../api/APIManager';
import EmployeeCard from './EmployeeCard';
import EmployeeDetails from './EmployeeDetails'

export default class EmployeeList extends Component {
    state = {
        employees: [],
        storedEmployee: ""
    }

    storedEmployeeString = sessionStorage.getItem("employeeSearch").split(" ")

componentDidMount() {
    this.setState({
        storedEmployee: this.storedEmployeeString
    })
        APIManager.searchForEmployeeByName(this.state.storedEmployee[0], this.state.storedEmployee[1])
            .then(response => {
                this.setState({
                    employees: response
                })
            })

}


render() {

    console.log("stored employee", (this.state.storedEmployee[0]))
    console.log("employee returned", this.state.employees)
    return (
        <>
            <EmployeeCard />
            <div>
                <EmployeeDetails />
            </div>
        </>
    )
}
}