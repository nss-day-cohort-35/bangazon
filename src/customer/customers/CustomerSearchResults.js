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
                customers: customers,
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
                    <Table.Cell>Approved</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Jamie</Table.Cell>
                    <Table.Cell>Approved</Table.Cell>
                    <Table.Cell>Requires call</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Jill</Table.Cell>
                    <Table.Cell>Denied</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>

        <TableContainer component={Paper}>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell align="right">CUSTOMER ID</TableCell>
                <TableCell align="right">ADDRESS</TableCell>
                <TableCell align="right">EMAIL</TableCell>
                <TableCell align="right">PHONE</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {this.state.customers.map(item => (
                <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                    {item.firstName} {item.lastName}
                </TableCell>
                <TableCell align="right">{item.id}</TableCell>
            <TableCell align="right">{item.address}, {item.state}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{item.phone}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
  }
}