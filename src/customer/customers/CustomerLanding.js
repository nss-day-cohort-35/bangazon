import React, { Component } from 'react';
import CustomerProfileCard from './CustomerProfileCard';

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