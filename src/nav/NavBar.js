import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import SearchBar from './SearchBar';
import { List, Button, Icon, Sidebar, Dimmer } from 'semantic-ui-react'


export default class NavigationBar extends Component {
	state = {
		view: ""
	}


	render() {

		let text = null
		if (this.props.location.pathname.startsWith("/customer-portal/customers")) {
			text = "Add a Customer"
		} else if (this.props.location.pathname.startsWith("/employee-portal/employees")) {
			text = "Add an Employee"
		} else if (this.props.location.pathname.startsWith("/employee-portal/computers")) {
			text = "Add a Computer"
		} else if (this.props.location.pathname.startsWith("/employee-portal/departments")) {
			text = "Add a Department"
		} else if (this.props.location.pathname.startsWith("/employee-portal/training")) {
			text = "Add Trainings"
		} else if (this.props.location.pathname.startsWith("/customer-portal/products")) {
			text = "Add a Product"
		} else if (this.props.location.pathname.startsWith("/customer-portal/orders")) {
			text = "Add an Order"
		}

		console.log("where are you", this.props)

		return (
			<>
				<h1>{this.props.view}</h1>
				{this.props.view === "Employees" ? (
					<>
						<Link to="/customer-portal">
							<Button color="blue">Go to Customer Portal</Button>
						</Link>
					</>
				) : (
						<Link to="/employee-portal">
							<Button color="blue">Go to Employee Portal</Button>
						</Link>
					)}
				{this.props.location.pathname === "/employee-portal/" ? null
					:
					<Button color="orange" >{text}</Button>}

				<Route
					path="/"
					render={props => {
						return <SearchBar {...props} />;
					}}
				/>
			</>
		);
	}
}