import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import SearchBar from './SearchBar';
import { Button } from 'semantic-ui-react'



export default class NavigationBar extends Component {

	render() {

		let text = null
		if (this.props.location.pathname.startsWith("/customer-portal/customers/")) {
			text = "Add a Customer"
		} else if (this.props.location.pathname === "/employee-portal/") {
			text = "Add an Employee"
		} else if (this.props.location.pathname.startsWith("/employee-portal/employees/")) {
			text = "Add an Employee"
		} else if (this.props.location.pathname.startsWith("/employee-portal/computers/")) {
			text = "Add a Computer"
		} else if (this.props.location.pathname.startsWith("/employee-portal/departments/")) {
			text = "Add a Department"
		} else if (this.props.location.pathname.startsWith("/employee-portal/training/")) {
			text = "Add Trainings"
		} else if (this.props.location.pathname.startsWith("/customer-portal/products/")) {
			text = "Add a Product"
		} else if (this.props.location.pathname.startsWith("/customer-portal/orders/")) {
			text = "Add an Order"
		}



		if (this.props.location.pathname.startsWith("/customer-portal/customers/")) {
			return null
		} else if (this.props.location.pathname.startsWith("/customer-portal/products")) {
			return null
		} else if (this.props.location.pathname.startsWith("/customer-portal/orders")) {
			return null
		} else if (this.props.location.pathname.startsWith("/employee-portal/employees/")) {
			return <>
				{this.props.view === "Employees" ? (
					<div className='portalDiv'>
						<h4 className='viewManager'>{this.props.view.toUpperCase()} MANAGER</h4>
						<div className='portalButton'>
							<Link to="/customer-portal/">
								<Button color="blue">Go to Customer Portal</Button>
							</Link>
						</div>
					</div>
				) : (
						<Link to="/employee-portal/">
							<Button color="blue">Go to Employee Portal</Button>
						</Link>
					)}
				{this.props.location.pathname === "/employee-portal/" ? null
					:
					<div className='barAndButtonContainer'>
						<h1 className='viewHeader' >{this.props.view}</h1>
						<div className='searchBarContainer'>
							<Route
								path="/"
								render={props => {
									return <SearchBar {...props} />;
								}}
							/>
							<div className='buttonContainer'>
								<Button
									color="orange"
									onClick={this.toggle}
								>

									{text}</Button>
							</div>
						</div>
					</div>
				}
			</>
		} else if (this.props.location.pathname.startsWith("/employee-portal/computers")) {
			return <>
				{this.props.view === "Employees" ? (
					<div className='portalDiv'>
						<h4 className='viewManager'>{this.props.view.toUpperCase()} MANAGER</h4>
						<div className='portalButton'>
							<Link to="/customer-portal/">
								<Button color="blue">Go to Customer Portal</Button>
							</Link>
						</div>
					</div>
				) : (
						<Link to="/employee-portal/">
							<Button color="blue">Go to Employee Portal</Button>
						</Link>
					)}
				{this.props.location.pathname === "/employee-portal/" ? null
					:
					<div className='barAndButtonContainer'>
						<h1 className='viewHeader' >{this.props.view}</h1>
						<div className='searchBarContainer'>
							<Route
								path="/"
								render={props => {
									return <SearchBar {...props} />;
								}}
							/>
							<div className='buttonContainer'>
								<Button
									color="orange"
									onClick={this.toggle}
								>

									{text}</Button>
							</div>
						</div>
					</div>
				}
			</>
		} else if (this.props.location.pathname.startsWith("/employee-portal/departments")) {
			return <>
				{this.props.view === "Employees" ? (
					<div className='portalDiv'>
						<h4 className='viewManager'>{this.props.view.toUpperCase()} MANAGER</h4>
						<div className='portalButton'>
							<Link to="/customer-portal/">
								<Button color="blue">Go to Customer Portal</Button>
							</Link>
						</div>
					</div>
				) : (
						<Link to="/employee-portal/">
							<Button color="blue">Go to Employee Portal</Button>
						</Link>
					)}
				{this.props.location.pathname === "/employee-portal/" ? null
					:
					<div className='barAndButtonContainer'>
						<h1 className='viewHeader' >{this.props.view}</h1>
						<div className='searchBarContainer'>
							<Route
								path="/"
								render={props => {
									return <SearchBar {...props} />;
								}}
							/>
							<div className='buttonContainer'>
								<Button
									color="orange"
									onClick={this.toggle}
								>

									{text}</Button>
							</div>
						</div>
					</div>
				}

			</>
		} else if (this.props.location.pathname.startsWith("/employee-portal/training")) {
			return <>
				{this.props.view === "Employees" ? (
					<div className='portalDiv'>
						<h4 className='viewManager'>{this.props.view.toUpperCase()} MANAGER</h4>
						<div className='portalButton'>
							<Link to="/customer-portal/">
								<Button color="blue">Go to Customer Portal</Button>
							</Link>
						</div>
					</div>
				) : (
						<Link to="/employee-portal/">
							<Button color="blue">Go to Employee Portal</Button>
						</Link>
					)}
				{this.props.location.pathname === "/employee-portal/" ? null
					:
					<div className='barAndButtonContainer'>
						<h1 className='viewHeader' >{this.props.view}</h1>
						<div className='searchBarContainer'>
							<Route
								path="/"
								render={props => {
									return <SearchBar {...props} />;
								}}
							/>
							<div className='buttonContainer'>
								<Button
									color="orange"
									onClick={this.toggle}
								>

									{text}</Button>
							</div>
						</div>
					</div>
				}


			</>

		} else
			return (
				<>
					{this.props.view === "Employees" ? (
						<div className='portalDiv'>
							<h4 className='viewManager'>{this.props.view.toUpperCase()} MANAGER</h4>
							<div className='portalButton'>
								<Link to="/customer-portal/">
									<Button color="blue">Go to Customer Portal</Button>
								</Link>
							</div>
						</div>
					) : (
							<Link to="/employee-portal/">
								<Button color="blue">Go to Employee Portal</Button>
							</Link>
						)}
					{this.props.location.pathname === "/employee-portal/" ?
						<div className='barAndButtonContainer'>
							<h1 className='viewHeader' >{this.props.view}</h1>
							<div className='searchBarContainer'>
								<Route
									path="/"
									render={props => {
										return <SearchBar {...props} />;
									}}
								/>
								<div className='buttonContainer'>
									<Button
										color="orange"
										onClick={this.toggle}
									>

										{text}</Button>
								</div>
							</div>
						</div>
						: null
					}

				</>
			);
	}
}