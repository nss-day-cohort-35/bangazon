import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class SideBar extends Component {
	state = {
		activeItem: ""
    };

	employeeOptions = [
		{
			title: "Dashboard",
			link: "/employee-portal/"
		},
		{
			title: "Computers",
			link: "/employee-portal/computers/"
		},
		{
			title: "Departments",
			link: "/employee-portal/departments/"
		},
		{
			title: "Employees",
			link: "/employee-portal/employees/"
		},
		{
			title: "Training",
			link: "/employee-portal/training/"
		}
	];

	customerOptions = [
		{
			title: "Customers",
			link: "/customer-portal/customers"
		},
		{
			title: "Products",
			link: "/customer-portal/products"
		},
		{
			title: "Orders",
			link: "/customer-portal/orders"
		},
		{
			title: "Payments",
			link: "/customer-portal/payments"
		}
	];
	handleItemClick = (e, { name, url }) => {
		this.setState({ activeItem: name });
		this.props.history.push(url);
	};

	render() {
		const { activeItem } = this.state;

		const items =
			this.props.view === "Employees"
				? this.employeeOptions
				: this.customerOptions;

		return (
			<>
				<Menu pointing vertical>
					{items.map((option) => (
						<Menu.Item
                            key={option.link}
							name={option.title}
							url={option.link}
							active={activeItem === option.title}
							onClick={this.handleItemClick}
						/>
					))}
				</Menu>
			</>
		);
	}
}
export default withRouter(SideBar)