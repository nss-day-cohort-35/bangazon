import React, { Component } from 'react';
import APIManager from '../../api/APIManager';
import EmployeeCard from './EmployeeCard';
import { withRouter } from 'react-router-dom'


class EmployeeList extends Component {
    state = {
        employees: [],
        storedEmployee: ""
    }

    getEmployeeData = () => {
        this.setState({
            storedEmployee: this.props.searchValue
        })
    }


    componentDidMount() {
        APIManager.searchForEmployeeByName(this.props.searchValue[0], this.props.searchValue[1])
            .then(response => {
                this.setState({
                    employees: response
                })
            })
    }


componentDidUpdate(prevProps, prevState) {

    if (prevProps.searchValue !== this.props.searchValue) {
        APIManager.searchForEmployeeByName(this.props.searchValue[0], this.props.searchValue[1])
            .then(response => {
                this.setState({
                    employees: response
                })
            })
        console.log("componentWillUpdate ran", prevProps.searchValue, "Stored employee", this.state.storedEmployee)
    }
}
render() {
    // console.log("stored employee", this.state.storedEmployee)
    // console.log("employees array", this.state.employees)
    // console.log("searchValue", this.props.searchValue)
    // console.log("props", this.props)

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

export default withRouter(EmployeeList)