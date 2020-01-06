import React, { Component } from 'react';
import { Route } from "react-router-dom";
import OrderSearchResults from './OrderSearchResults'

export default class OrderLanding extends Component {

  render() {
    return (
      <Route
        exact
        path="/customer-portal/orders/:orderId"
        render={props => {
          return <OrderSearchResults {...props} />;
        }}
      />


    )
  }
}