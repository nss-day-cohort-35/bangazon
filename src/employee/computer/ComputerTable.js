import React, { Component } from 'react'
import ComputerEdit from './ComputerEdit';
import APIManager from '../../api/APIManager'
import { Table, Button, Sidebar } from 'semantic-ui-react'
import '../../App.css';

export default class ComputerTable extends Component {

    state = {
        computers: [],
        storedComputer: {},
        visible: false
    }

    componentDidMount() {
        APIManager.getAll("computers")
            .then(response => {
                this.setState({
                    computers: response
                })
            })
    }

    refresh = () => {
        APIManager.getAll("computers")
        .then(response => {
            this.setState({
                computers: response
            })
        })
    }

    handleOpen = (computer) => this.setState({
        active: true,
        storedComputer: computer
    })

    handleClose = () => this.setState({ active: false })

    toggle = () => {
        if (this.state.visible === false) {
            this.setState({
                visible: true
            })
        } else {
            this.setState({
                visible: false
            })
        }
    }

    closeSidebar = () => {
        if (this.state.visible === true) {
            this.setState({
                visible: false
            })
        }
    }


    render() {

        let status = null
        const { active } = this.state

        return (
            <>

                    <Table size='small' celled>
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
                        {this.state.computers.map(computer => (
                            <Table.Body key={computer.id}>
                                <Table.Row>
                                    <Table.Cell >{computer.id}</Table.Cell>
                                    <Table.Cell >{computer.make} {computer.model}</Table.Cell>
                                    <Table.Cell > {(new Date(computer.purchaseDate)).getMonth() + 1}/{(new Date(computer.purchaseDate)).getDate()}/{(new Date(computer.purchaseDate)).getFullYear()}</Table.Cell>
                                    <Table.Cell >{computer.decomissionDate === null ? status = "Active" : "Inactive"}</Table.Cell>
                                    <Table.Cell >{null}</Table.Cell>
                                    <Table.Cell><Button basic color='orange' content='Edit'
                                        onClick={() => this.handleOpen(computer)}>
                                    </Button></Table.Cell>
                                </Table.Row>
                            </Table.Body>))}

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
                            <ComputerEdit closeSidebar={this.handleClose} refresh={this.refresh} computer={this.state.storedComputer} />
                        </Sidebar>
            </>
        )
    }
}