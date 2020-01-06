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
        if(event.key === 'Enter' && this.props.match.path === "employees"){
          this.handleEmployeeSearch()
        }
      }

    handleEmployeeSearch = () => {
        sessionStorage.setItem("employeeSearch", this.state.employeeValue)
        this.props.history.push("/employee-portal/employees")
    }

    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        console.log("prevProps",prevProps, this.props)
        // if (prevProps.data !== this.props.data) {
        //   this.chart = c3.load({
        //     data: this.props.data
        //   });
        }


    render() {

        let placeholderText = "Search..."
        if (this.props.match.path === "/customer-portal/customers") {
            placeholderText = "Search for customer..."
        } else if (this.props.match.path === "/customer-portal/products") {
            placeholderText = "Search for products..."
        } else if (this.props.match.path === "/customer-portal/orders") {
            placeholderText = "Search for order by ID"
        } else if (this.props.match.path === "/employee-portal/employees") {
            placeholderText = "Find your employees"
        } else if (this.props.match.path === "/employee-portal/computers") {
            placeholderText = "Search computers by ID"
        } else if (this.props.match.path === "/employee-portal/departments") {
            placeholderText = "Search departments"
        } else if (this.props.match.path === "/employee-portal/training") {
            placeholderText = "Search trainings"
        }

        let id = 'value'
        if (this.props.match.path === "/employee-portal/employees") {
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