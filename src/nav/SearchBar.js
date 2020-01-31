import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'



export default class SearchBar extends Component {

    state = {
        view: "",
        isLoading: false,
        value: '',
        employeeValue: '',
    }

    handleFieldChange = (e) => {
        const stateToChange = {};
        stateToChange[e.target.id] = e.target.value;
        this.setState(stateToChange);
    }

    employeeHandleKeyPress = (event) => {
        if (event.key === 'Enter' && this.props.location.pathname.startsWith("/employee-portal/")) {
            this.handleEmployeeSearch()
        } else if (event.key === 'Enter' && this.props.location.pathname === "/employee-portal/employees/") {
            this.handleEmployeeSearch()
        }
    }

    handleEmployeeSearch = () => {
        let newEmployeeValue = this.state.employeeValue.split(" ")
        let joinedEmployeeValue = newEmployeeValue.join("-")
        console.log(joinedEmployeeValue)
        this.props.history.push(`/employee-portal/employees/${joinedEmployeeValue}/`)
    }

    render() {

        let placeholderText = "Search..."
        if (this.props.location.pathname === "/customer-portal/customers") {
            placeholderText = "Search for customer..."
        } else if (this.props.location.pathname === "/customer-portal/products") {
            placeholderText = "Search for products..."
        } else if (this.props.location.pathname === "/customer-portal/orders") {
            placeholderText = "Search for order by ID"
        } else if (this.props.location.pathname === "/employee-portal/employees") {
            placeholderText = "Find your employees"
        } else if (this.props.location.pathname === "/employee-portal/computers") {
            placeholderText = "Search computers by ID"
        } else if (this.props.location.pathname === "/employee-portal/departments") {
            placeholderText = "Search departments"
        } else if (this.props.location.pathname === "/employee-portal/training") {
            placeholderText = "Search trainings"
        }

        let id = 'value'
        if (this.props.location.pathname === "/employee-portal/") {
            id = 'employeeValue'
        } else if (this.props.location.pathname.startsWith("/employee-portal/employees")) {
            id = 'employeeValue'
        }

        return (
            <>
                <Input
                    size='large'
                    icon={{ name: 'search', link: true }}
                    type="text"
                    onChange={this.handleFieldChange}
                    onKeyPress={this.employeeHandleKeyPress}
                    id={id}
                    placeholder={placeholderText}
                />

            </>
        )
    }

}