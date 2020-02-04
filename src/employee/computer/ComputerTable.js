import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import APIManager from '../../api/APIManager'

export default class ComputerTable extends Component {

    state = {
        computers: [],
        storedComputer: {}
    }

    componentDidMount() {
        APIManager.getAll("computers")
            .then(response => {
                this.setState({
                    computers: response
                })
            })
    }
    render() {
        let status = null
        if (this.state.computers.decomissionDate === null) {
            status = "Active"
        } else status = "Inactive"

        return (
            <>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Computer ID</Table.HeaderCell>
                            <Table.HeaderCell>Computer Model</Table.HeaderCell>
                            <Table.HeaderCell>Active Status</Table.HeaderCell>
                            <Table.HeaderCell>Used By</Table.HeaderCell>
                            <Table.HeaderCell>Details</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {this.state.computers.map(computer => (
                        <Table.Body key={computer.id}>
                            <Table.Row>
                                <Table.Cell >{computer.id}</Table.Cell>
                                <Table.Cell >{computer.make} {computer.model}</Table.Cell>
                                <Table.Cell ></Table.Cell>
                                <Table.Cell >{null}</Table.Cell>
                                <Table.Cell><Button basic color='orange' content='Details'></Button></Table.Cell>
                            </Table.Row>
                        </Table.Body>))}
                </Table>
            </>
        )
    }
}