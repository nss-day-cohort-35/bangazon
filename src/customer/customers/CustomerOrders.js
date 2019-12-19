import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);
function createData(productTypeId, price, description, title, dateAdded) {
  return {productTypeId, price, description, title, dateAdded};
}
const rows = [
  createData('productTypeId', 159, 6.0, 24, 4.0),
  createData('price', 237, 9.0, 37, 4.3),
  createData('description', 262, 16.0, 24, 6.0),
  createData('title', 305, 3.7, 67, 4.3),
  createData('dateAdded', 356, 16.0, 49, 3.9),
];
const useStyles = makeStyles({
  table: {
  maxWidth: 250,
  },
});
export default class CustomerOrders extends Component {
  classes = ()=> useStyles();
  render(){
  return (
    <TableContainer component={Paper}>
      <Table className={this.classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>productTypeId</StyledTableCell>
            <StyledTableCell align="right">price</StyledTableCell>
            <StyledTableCell align="right">description</StyledTableCell>
            <StyledTableCell align="right">title</StyledTableCell>
            <StyledTableCell align="right">dateAdded</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
}