import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import EmployeeContainer from './employee/EmployeeContainer'
import CustomerContainer from './customer/CustomerContainer'
// import { UserProvider } from './UserContext';
import { Button } from 'semantic-ui-react'

class Landing extends Component {


  toEmployees = (props) => {
    props.history.push("/employee-portal/")
  }

  toCustomers = (props) => {
    props.history.push("/customer-portal/")
  }
  render() {

    return (
      <>
        <Route exact path="/" render={props => {
          return <div>
            <div>
              <Link to="/employee-portal/">
                <img src={require("../src/images/Human.png")} alt="watering plants"></img>
              </Link>
              <Button basic color='orange' onClick={() => this.toEmployees(props)}>
                Employees
              </Button>
            </div>

            <hr></hr>

            <div>
              <Link to="/customer-portal/">
                <img src={require("../src/images/Shopping-Cart.png")} alt="shopping cart"></img>
              </Link>
              <Button basic color='orange' onClick={() => this.toCustomers(props)}>
                Customers
              </Button>
            </div>
          </div>
        }} />

        <Route path="/employee-portal/" render={props => {
          return <EmployeeContainer {...props} />

        }} />

        <Route path="/customer-portal/" render={props => {
          return <CustomerContainer {...props} />
        }} />
      </>
    )
  }
}
export default Landing
