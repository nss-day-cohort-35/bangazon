import React, { Component } from 'react';
import { Route } from "react-router-dom";
import ProductSearchResult from './ProductSearchResult'
import ProductTypeList from './ProductTypeList'

export default class ProductLanding extends Component {

  render() {
    return (
      <Route
        exact
        path="/customer-portal/products/"
        render={props => {
          return (
            <>
              <ProductTypeList {...props} />
              <ProductSearchResult {...props} />
            </>
          )
        }}
      />
    )
  }
}