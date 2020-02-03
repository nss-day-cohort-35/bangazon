import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import EmployeeContainer from './employee/EmployeeContainer'
import CustomerContainer from './customer/CustomerContainer'
// import { UserProvider } from './UserContext';
// import { Segment, Dimmer } from 'semantic-ui-react'

class Landing extends Component {

  render() {

    return (
      <>
        <Route exact path="/" render={props => {
          return <div>
            <button><Link to="/employee-portal">Employees</Link></button>
            <button><Link to="/customer-portal">Customers</Link></button>
          </div>
        }} />

        <Route path="/employee-portal" render={props => {
          return <EmployeeContainer {...props} />

        }} />

        <Route path="/customer-portal" render={props => {
          return <CustomerContainer {...props} />
        }} />
      </>
    )
  }
}
export default Landing
