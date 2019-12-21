import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import SearchBar from './SearchBar';
import { Button } from 'semantic-ui-react'


export default class NavigationBar extends Component {
    state = {
        view: ""
    }
    render() {
        return (
            <>
                <h1>{this.props.view}</h1>
				{this.props.view === "Employees" ? (
					<Link to="/customer-portal">
						<Button color="orange">Go to Customer Portal</Button>
					</Link>
				) : (
					<Link to="/employee-portal">
						<Button color="orange">Go to Employee Portal</Button>
					</Link>
				)}
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
		);
    }

}