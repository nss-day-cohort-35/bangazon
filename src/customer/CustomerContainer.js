import React, { Component } from 'react';
import { Route } from "react-router-dom";
import NavigationBar from '../nav/NavBar'
import SideBar from '../nav/SideBar'
import PaymentLanding from './payment/PaymentLanding'
import ProductLanding from './product/ProductLanding'
import OrderLanding from './order/OrderLanding'
import CustomerLanding from './customers/CustomerLanding'
import CustomerProfileCard from './customers/CustomerProfileCard';
import CustomerOrders from './customers/CustomerOrders'

export default class CustomerContainer extends Component {
	render() {
		return (
			<>
				<SideBar view="Customers" />

				<div className='containerDiv'>
				<p>Customer Container</p>
					<NavigationBar portal="Customers" {...this.props} />
					<CustomerOrders />
					<CustomerProfileCard />

					<Route
						exact
						path="/customer-portal"
						render={props => {
							return <CustomerLanding {...props} />;
						}}
					/>



					<Route
						exact
						path="/customer-portal/orders"
						render={props => {
							return <OrderLanding {...props} />;
						}}
					/>

					<Route
						exact
						path="/customer-portal/payments"
						render={props => {
							return <PaymentLanding {...props} />;
						}}
					/>

					<Route
						exact
						path="/customer-portal/products"
						render={props => {
							return <ProductLanding {...props} />;
						}}
					/>
				</div>
			</>
		);
	}

}