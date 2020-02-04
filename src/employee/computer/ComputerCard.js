import React, { Component } from 'react'
import {Table, Button} from 'semantic-ui-react'

export default class ComputerCard extends Component {


    render() {
        let status = null
        if (this.props.computer.decomissionDate === null) {
            status = "Active"
        } else status = "Inactive"
        return (
            <>
            <br></br>
            <p>Search Results</p>
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
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>{this.props.computer.id}</Table.Cell>
                            <Table.Cell>{this.props.computer.make} {this.props.computer.model}</Table.Cell>
                            <Table.Cell>{status}</Table.Cell>
                            <Table.Cell>{null}</Table.Cell>
                            <Table.Cell><Button basic color='orange' content='Cancel'>Details</Button></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        )
    }

}
