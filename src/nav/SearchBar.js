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



    render() {

        let placeholderText = "Search..."
        if (this.props.view === "customers"){
            placeholderText = "Search for customer..."
        } else if (this.props.view === "products"){
            placeholderText = "Search for products..."
        } else if (this.props.view === "orders"){
            placeholderText = "Search for order by ID"
        } else if (this.props.view === "employees"){
            placeholderText = "Find your employees"
        } else if (this.props.view === "computers"){
            placeholderText = "Search computers by ID"
        } else if (this.props.view === "departments"){
            placeholderText = "Search departments"
        } else if (this.props.view === "training"){
            placeholderText = "Search trainings"
        }

        let id = 'value'
        if (this.props.view === "employees"){
            id = 'employeeValue'
        }
        console.log("value in state:", this.state.value.split(' '))
        console.log("employee value in state:", this.state.employeeValue.split(' '))
        return (
            <>
            <Input
            size='large'
            icon='search'
            type="text"
            onChange={this.handleFieldChange}
            id={id}
            placeholder={placeholderText}
            />

            </>
        )
    }

}