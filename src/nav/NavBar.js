import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import SearchBar from './SearchBar';
import EmployeeAdd from '../employee/employee/EmployeeAdd';
import ComputerAdd from '../employee/computer/ComputerAdd';
import { Button, Sidebar } from 'semantic-ui-react'



export default class NavigationBar extends Component {
	state = {
		visible: false,
		active: false
	}

	handleOpen = () => this.setState({ active: true })
	handleClose = () => this.setState({ active: false })

	toggle = () => {
		if (this.state.visible === false) {
			this.setState({ visible: true })
		} else {
			this.setState({ visible: false })
		}
	}


	render() {

		const { active } = this.state

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
		} else if (this.props.location.pathname.startsWith("/employee-portal/employees") && this.state.visible === true) {
			console.log('condition met', this.state.active)
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
						onClick={this.handleOpen}
					>{text}</Button>}

				<Route
					path="/"
					render={props => {
						return <SearchBar {...props} />;
					}}
				/>
				<Sidebar
					animation='push'
					icon='labeled'
					inverted
					onHide={null}
					vertical='false'
					visible={active}
					width='wide'
					direction='right'>
					<EmployeeAdd closeSidebar={this.handleClose} />
				</Sidebar>
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
						onClick={this.handleOpen}
					>{text}</Button>}

				<Route
					path="/"
					render={props => {
						return <SearchBar {...props} />;
					}}
				/>
				<Sidebar
					animation='push'
					icon='labeled'
					inverted='false'
					onHide={null}
					vertical='false'
					visible={active}
					width='wide'
					direction='right'>
					<ComputerAdd closeSidebar={this.handleClose} />
				</Sidebar>
			</>
		} else if (this.props.location.pathname.startsWith("/employee-portal/departments")) {
			return null
		} else if (this.props.location.pathname.startsWith("/employee-portal/training")) {
			return null
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