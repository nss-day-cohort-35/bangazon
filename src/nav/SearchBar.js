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


    handleKeyPress = (event) => {
        if (event.key === 'Enter' && this.props.location.pathname === "/employee-portal/") {
            this.handleEmployeeSearch()
        } else if (event.key === 'Enter' && this.props.location.pathname.startsWith("/employee-portal/employees/")) {
            this.handleEmployeeSearch()
        } else if (event.key === 'Enter' && this.props.location.pathname.startsWith("/employee-portal/computers/")) {
            this.handleComputerSearch()
        } else if (event.key === 'Enter' && this.props.location.pathname.startsWith("/employee-portal/departments/")) {
            this.handleDepartmentSearch()
        } else if (event.key === 'Enter' && this.props.location.pathname.startsWith("/employee-portal/training/")) {
            this.handleTrainingSearch()
        }
    }

    handleComputerSearch = () => {
        let computerSearchValue = this.state.value
        this.props.history.push(`/employee-portal/computers/${computerSearchValue}/`)
    }

    handleDepartmentSearch = () => {
        let departmentSearchValue = this.state.value
        this.props.history.push(`/employee-portal/departments/${departmentSearchValue}/`)
    }

    handleTrainingSearch = () => {
        let trainingSearchValue = this.state.value
        this.props.history.push(`/employee-portal/training/${trainingSearchValue}/`)
    }

    handleEmployeeSearch = () => {
        let newEmployeeValue = this.state.employeeValue.split(" ")
        let joinedEmployeeValue = newEmployeeValue.join("-")
        this.props.history.push(`/employee-portal/employees/${joinedEmployeeValue}/`)
    }

    render() {

        let placeholderText = "Search..."
        if (this.props.location.pathname === "/customer-portal/customers/") {
            placeholderText = "Search for customer..."
        } else if (this.props.location.pathname === "/customer-portal/products/") {
            placeholderText = "Search for products..."
        } else if (this.props.location.pathname === "/customer-portal/orders/") {
            placeholderText = "Search for order by ID"
        } else if (this.props.location.pathname.startsWith("/employee-portal/employees/")) {
            placeholderText = "Find your employees"
        } else if (this.props.location.pathname.startsWith("/employee-portal/computers/")) {
            placeholderText = "Search computers by ID"
        } else if (this.props.location.pathname.startsWith("/employee-portal/departments/")) {
            placeholderText = "Search depts by ID"
        } else if (this.props.location.pathname.startsWith("/employee-portal/training/")) {
            placeholderText = "Search trainings"
        }

        let id = 'value'
        if (this.props.location.pathname === "/employee-portal/") {
            id = 'employeeValue'
        } else if (this.props.location.pathname.startsWith("/employee-portal/employees")) {
            id = 'employeeValue'
        }

        let onClickAction = null
        if (this.props.location.pathname === "/employee-portal" || this.props.location.pathname.startsWith("/employee-portal/employees")) {
            onClickAction = this.handleEmployeeSearch
        } else if (this.props.location.pathname.startsWith("/employee-portal/computers")) {
            onClickAction = this.handleComputerSearch
        }

        return (
            <>
                <Input
                    size='large'
                    icon={{ name: 'search', link: true, onClick: onClickAction }}
                    type="text"
                    onChange={this.handleFieldChange}
                    onKeyPress={this.handleKeyPress}
                    id={id}
                    placeholder={placeholderText}
                />

            </>
        )
    }

}