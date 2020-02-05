import React, { Component } from 'react'
import ComputerEdit from './ComputerEdit'
import { Table, Button, Sidebar } from 'semantic-ui-react'

export default class ComputerCard extends Component {
    state = {
        visible: false
    }

    handleOpen = () => this.setState({ active: true })
    handleClose = () => this.setState({ active: false })

    render() {
        let status = null
        let { active } = this.state
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
                            <Table.Cell><Button basic color='orange' content='Edit' onClick={this.handleOpen}></Button></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                    <Sidebar
                        animation='push'
                        icon='labeled'
                        inverted='false'
                        onHide={null}
                        vertical='true'
                        visible={active}
                        width='wide'
                        direction='right'
                    >
                        <ComputerEdit closeSidebar={this.handleClose} computer={this.props.computer} />
                    </Sidebar>
            </>
        )
    }

}
