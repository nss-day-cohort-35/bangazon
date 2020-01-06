import React, { Component } from 'react';
import { Route } from "react-router-dom";
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