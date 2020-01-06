import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import APIManager from "../../api/APIManager";


export default class CustomerProfileCard extends Component {
	state = {
		customers: []
	};

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		APIManager.getById("customers", id).then(customers => {
			this.setState({
				customers: customers
			});
		});
	};

	render() {
		return (
					<Card key={item.id}>
						<Card.Content>
							<Image src="https://image.flaticon.com/icons/png/512/1077/1077012.png" />
							<Card.Header>
								{item.firstName} {item.lastName}
							</Card.Header>
							<Card.Meta>ID#: {item.id}</Card.Meta>
							<Card.Description>E-mail: {item.email}</Card.Description>
							<Card.Description>Phone Numer: {item.phone}</Card.Description>
							<Card.Description>Address: {item.address}</Card.Description>
						</Card.Content>
					</Card>
				)
	};
	}
