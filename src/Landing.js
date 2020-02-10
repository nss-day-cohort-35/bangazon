import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import EmployeeContainer from './employee/EmployeeContainer'
import CustomerContainer from './customer/CustomerContainer'
import { Button, Divider } from 'semantic-ui-react'

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
          return <div className='landingDiv'>
            <div className='landingEmployeePortalDiv'>
              <Link to="/employee-portal/">
                <img src={require("../src/images/Human.png")} alt="watering plants"></img>
              </Link>
              <h2 className='portalTitle'>EMPLOYEE MANAGER</h2>
              <Button basic color='orange' onClick={() => this.toEmployees(props)}>
                Employees
              </Button>
            </div>

            <Divider vertical >OR</Divider>

            <div className='landingCustomerPortalDiv'>
              <Link to="/customer-portal/">
                <img src={require("../src/images/Shopping-Cart.png")} alt="shopping cart"></img>
              </Link>
              <h2 className='portalTitle'>CUSTOMER MANAGER</h2>
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
