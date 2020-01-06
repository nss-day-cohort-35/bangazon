import React, { Component } from 'react';
import { Route } from "react-router-dom";
import CustomerProfileCard from './CustomerProfileCard';
import CustomerSearchResults from './CustomerSearchResults'
import CustomerOrders from './CustomerOrders'

export default class CustomerLanding extends Component {

  render() {
    return (
      <>
        <Route
          exact
          path="/customer-portal/customers/:customerId"
          render={props => {
            return <CustomerSearchResults {...props} />;
          }}
        />

        <Route
          exact
          path="/customer-portal/customers/:customerName/name"
          render={props => {
            return <CustomerSearchResults {...props} />;
          }}
        />

        <Route
          exact
          path="/customer-portal/customers/:customerId/orders"
          render={props => {
            return <>
              <CustomerOrders {...props} />
              <CustomerProfileCard {...props} />
            </>
          }}
        />
      </>
    )
  }
}