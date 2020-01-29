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
					path="/"
					render={props => {
						return <SearchBar {...props} />;
					}}
				/>
			</>
		);
	}

}