import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import SearchBar from './SearchBar';
import { Button } from 'semantic-ui-react'



export default class NavigationBar extends Component {


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


		if (this.props.location.pathname.startsWith("/customer-portal/customers")) {
			return null
		} else if (this.props.location.pathname.startsWith("/employee-portal/employees")) {
			return <>

				<h1>{this.props.view}</h1>
				{this.props.view === "Employees" ? (
					<>

						<Link to="/customer-portal/">
							<Button color="blue">Go to Customer Portal</Button>
						</Link>
					</>
				) : (
						<Link to="/employee-portal/">
							<Button color="blue">Go to Employee Portal</Button>
						</Link>
					)}
				{this.props.location.pathname === "/employee-portal/" ? null
					:
					<Button
						color="orange"
						onClick={this.props.openSidebar}
					>{text}</Button>}

				<Route
					path="/"
					render={props => {
						return <SearchBar {...props} />;
					}}
				/>
			</>
		} else if (this.props.location.pathname.startsWith("/employee-portal/computers")) {
			return <>

				<h1>{this.props.view}</h1>
				{this.props.view === "Employees" ? (
					<>

						<Link to="/customer-portal/">
							<Button color="blue">Go to Customer Portal</Button>
						</Link>
					</>
				) : (
						<Link to="/employee-portal/">
							<Button color="blue">Go to Employee Portal</Button>
						</Link>
					)}
				{this.props.location.pathname === "/employee-portal/" ? null
					:
					<Button
						color="orange"
						onClick={this.props.openSidebar}
					>{text}</Button>}

				<Route
					path="/"
					render={props => {
						return <SearchBar {...props} />;
					}}
				/>

			</>
		} else if (this.props.location.pathname.startsWith("/employee-portal/departments")) {
			return <>

				<h1>{this.props.view}</h1>
				{this.props.view === "Employees" ? (
					<>

						<Link to="/customer-portal/">
							<Button color="blue">Go to Customer Portal</Button>
						</Link>
					</>
				) : (
						<Link to="/employee-portal/">
							<Button color="blue">Go to Employee Portal</Button>
						</Link>
					)}
				{this.props.location.pathname === "/employee-portal/" ? null
					:
					<Button
						color="orange"
						onClick={this.props.openSidebar}
					>{text}</Button>}
				<Route
					path="/"
					render={props => {
						return <SearchBar {...props} />;
					}}
				/>

			</>
		} else if (this.props.location.pathname.startsWith("/employee-portal/computers")) {
			return <>

				<h1>{this.props.view}</h1>
				{this.props.view === "Employees" ? (
					<>

						<Link to="/customer-portal/">
							<Button color="blue">Go to Customer Portal</Button>
						</Link>
					</>
				) : (
						<Link to="/employee-portal/">
							<Button color="blue">Go to Employee Portal</Button>
						</Link>
					)}
				{this.props.location.pathname === "/employee-portal/" ? null
					:
					<Button
						color="orange"
						onClick={this.props.openSidebar}
					>{text}</Button>}
				<Route
					path="/"
					render={props => {
						return <SearchBar {...props} />;
					}}
				/>


			</>
		} else if (this.props.location.pathname.startsWith("/employee-portal/training")) {
			return <>

				<h1>{this.props.view}</h1>
				{this.props.view === "Employees" ? (
					<>

						<Link to="/customer-portal/">
							<Button color="blue">Go to Customer Portal</Button>
						</Link>
					</>
				) : (
						<Link to="/employee-portal/">
							<Button color="blue">Go to Employee Portal</Button>
						</Link>
					)}
				{this.props.location.pathname === "/employee-portal/" ? null
					:
					<Button
						color="orange"
						onClick={this.props.openSidebar}
					>{text}</Button>}

				<Route
					path="/"
					render={props => {
						return <SearchBar {...props} />;
					}}
				/>

			</>

		} else if (this.props.location.pathname.startsWith("/customer-portal/products")) {
			return null
		} else if (this.props.location.pathname.startsWith("/customer-portal/orders")) {
			return null
		} else
			return (
				<>
					<h1>{this.props.view}</h1>
					{this.props.view === "Employees" ? (
						<>
							<Link to="/customer-portal/">
								<Button color="blue">Go to Customer Portal</Button>
							</Link>
						</>
					) : (
							<Link to="/employee-portal/">
								<Button color="blue">Go to Employee Portal</Button>
							</Link>
						)}
					{this.props.location.pathname === "/employee-portal/" ? null
						:
						<Button
							color="orange"
							onClick={this.toggle}
						>

							{text}</Button>}

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