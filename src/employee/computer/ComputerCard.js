import React, { Component } from 'react';
import ComputerEdit from './ComputerEdit';
import ComputerAdd from './ComputerAdd';
import { Table, Button, Sidebar, Icon } from 'semantic-ui-react';
import moment from 'moment'

export default class ComputerCard extends Component {
    state = {
        visible: false
    }

    handleOpen = () => this.setState({ active: true })
    handleClose = () => this.setState({ active: false })

    render() {
        let status = null
        let { active } = this.state
        let newActive = this.props.sidebarState
        if (this.props.computer.decomissionDate === 0 || this.props.computer.decomissionDate === null) {
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
                            <Table.HeaderCell>Purchase Date</Table.HeaderCell>
                            <Table.HeaderCell>Active Status</Table.HeaderCell>
                            <Table.HeaderCell>Used By</Table.HeaderCell>
                            <Table.HeaderCell>Details</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>{this.props.computer.id}</Table.Cell>
                            <Table.Cell>{this.props.computer.make} {this.props.computer.model}</Table.Cell>
                            <Table.Cell>{moment(this.props.computer.purchaseDate).format('MM/DD/YYYY')}</Table.Cell>
                            <Table.Cell>{status}</Table.Cell>
                            <Table.Cell>{null}</Table.Cell>
                            <Table.Cell><Button basic icon onClick={this.handleOpen}><Icon name='pencil alternate' /></Button></Table.Cell>
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
                <Sidebar
                    animation='push'
                    icon='labeled'
                    inverted='false'
                    onHide={null}
                    vertical='true'
                    visible={newActive}
                    width='wide'
                    direction='right'
                >
                    <ComputerAdd closeSidebar={this.handleClose} computer={this.props.computer} />
                </Sidebar>
            </>
        )
    }

}
