import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import SearchBar from './SearchBar';


export default class NavigationBar extends Component {
    state = {
        view: ""
    }


    render() {
        
        return (
            <>
                <h1>{this.props.portal}</h1>
                {(this.props.portal === "Employees") ?

                    <button><Link to="/customer-portal">Go to Customer Portal</Link></button>
                    :
                    <button><Link to="/employee-portal">Go to Employee Portal</Link></button>
                }
                <Route
					exact path="/customer-portal"
					render={props => {
						return <SearchBar {...props} view="customers" />;
					}}
				/>
                <Route
					path="/customer-portal/customers"
					render={props => {
						return <SearchBar {...props} view="customers" />;
					}}
				/>
				<Route
					path="/customer-portal/orders"
					render={props => {
						return <SearchBar {...props} view="orders" />;
					}}
				/>

				<Route
					path="/customer-portal/payments"
					render={props => {
						return null;
					}}
				/>

				<Route
					path="/customer-portal/products"
					render={props => {
						return <SearchBar {...props} view="products" />;
					}}
				/>
            </>
        )
    }

}