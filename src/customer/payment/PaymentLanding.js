import React, { Component } from 'react';
import PaymentTypeSearchResults from './PaymentTypeSearchResults'

export default class PaymentLanding extends Component {

  render() {
    return (
      <Route
        exact
        path="/customer-portal/payments/"
        render={props => {
          return <PaymentTypeSearchResults {...props} />;
        }}
      />
    )
  }
}