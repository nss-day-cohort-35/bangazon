
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import APIManager from '../../api/APIManager'

export default class CustomerOrders extends Component {
  state = {
    customers: [],
    products: [],
    id: ""
  }

 getData = () => {
   APIManager.getDataWithProduct("customers", 1575559407755 )
   .then(results => {
     console.log("products array", results)
    this.setState({
      customers: results.customers,
      products: results.products,
      id: results.id
    })
   })
 }
 componentDidMount(){
  this.getData();
 }

render(){
  return(

  <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>productTypeId</Table.HeaderCell>
        <Table.HeaderCell>dateAdded</Table.HeaderCell>
        <Table.HeaderCell>title</Table.HeaderCell>
        <Table.HeaderCell>price</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {this.state.products.map(item => (
      <Table.Row key={item.id}>
        <Table.Cell> {item.productTypeId}</Table.Cell>
        <Table.Cell>{item.dateAdded}</Table.Cell>
        <Table.Cell>{item.title}</Table.Cell>
        <Table.Cell>{item.price}</Table.Cell>
      </Table.Row>
      ))}
    </Table.Body>
  </Table>
  )
}
}

