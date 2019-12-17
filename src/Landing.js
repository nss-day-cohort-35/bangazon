import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import EmployeeContainer from './employee/EmployeeContainer'
import CustomerContainer from './customer/CustomerContainer'

function Landing() {

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
export default Landing;
