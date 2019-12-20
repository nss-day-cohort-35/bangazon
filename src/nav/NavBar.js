import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
			</>
		);
    }

}