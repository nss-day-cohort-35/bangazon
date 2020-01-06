import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'



export default class SearchBar extends Component {
    state = {
        view: "",
        isLoading: false,
        value: "",
        employeeValue: ""
    }

    handleFieldChange = (e) => {
        const stateToChange = {};
        stateToChange[e.target.id] = e.target.value;
        this.setState(stateToChange);
    }

    employeeHandleKeyPress = (event) => {
        if(event.key === 'Enter' && this.props.view === "employees"){
          this.handleEmployeeSearch()
        }
      }

    handleEmployeeSearch = () => {
        sessionStorage.setItem("employeeSearch", this.state.employeeValue)
        this.props.history.push("/employee-portal/employees")
    }



    render() {

        let placeholderText = "Search..."
        if (this.props.view === "customers") {
            placeholderText = "Search for customer..."
        } else if (this.props.view === "products") {
            placeholderText = "Search for products..."
        } else if (this.props.view === "orders") {
            placeholderText = "Search for order by ID"
        } else if (this.props.view === "employees") {
            placeholderText = "Find your employees"
        } else if (this.props.view === "computers") {
            placeholderText = "Search computers by ID"
        } else if (this.props.view === "departments") {
            placeholderText = "Search departments"
        } else if (this.props.view === "training") {
            placeholderText = "Search trainings"
        }

        let id = 'value'
        if (this.props.view === "employees") {
            id = 'employeeValue'
        }

        return (
            <>
                <Input
                    size='large'
                    icon={{name: 'search', link: true}}
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