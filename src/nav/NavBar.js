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
					<Button color="orange">
						<Link to="/customer-portal">Go to Customer Portal</Link>
					</Button>
				) : (
					<Button color="orange">
						<Link to="/employee-portal">Go to Employee Portal</Link>
					</Button>
				)}
			</>
		);
    }

}