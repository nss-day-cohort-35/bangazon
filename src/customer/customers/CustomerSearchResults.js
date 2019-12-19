import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import APIManager from '../../api/APIManager';

export default class CustomerSearchResults extends Component {
    state = {
        customers: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        APIManager.getAll("customers").then(customers => {
            this.setState({
                customers: customers
            })
        })
    }

  render() {
    return (
        <Table basic>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>NAME</Table.HeaderCell>
                    <Table.HeaderCell>CUSTOMER ID</Table.HeaderCell>
                    <Table.HeaderCell>ADDRESS</Table.HeaderCell>
                    <Table.HeaderCell>EMAIL</Table.HeaderCell>
                    <Table.HeaderCell>PHONE</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {this.state.customers.map(item => (
                <Table.Row key={item.id}>
                    <Table.Cell component="th" scope="row">{item.firstName} {item.lastName}</Table.Cell>
                    <Table.Cell align="right">{item.id}</Table.Cell>
                    <Table.Cell align="right">{item.address}, {item.state}</Table.Cell>
                    <Table.Cell align="right">{item.email}</Table.Cell>
                    <Table.Cell align="right">{item.phone}</Table.Cell>
                </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
  }
}