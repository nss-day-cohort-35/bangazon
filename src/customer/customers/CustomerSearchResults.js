import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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

    classes = () => makeStyles({
        table: {
          minWidth: 650,
        },
      });

  render() {
    return (
        <TableContainer component={Paper}>
        <Table className={this.classes.table} aria-label="simple table">
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