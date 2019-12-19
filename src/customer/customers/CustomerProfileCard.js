import React from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = (
	<a>
		<Icon name="user" />
		Edit
	</a>
);

const CustomerProfileCard = () => (
	<Card
		image="https://secure.gravatar.com/avatar/49b917047d697e1593433718dcd0212d"
		header="Sage Klein"
		meta="ID# 9283729834"
		description="Home: Yadyad St. Nashville TN 37209"
		description="E-mail: sageklein@gmail.com"
		extra="Phone: 615-765-7835"
	/>
);

export default CustomerProfileCard;
