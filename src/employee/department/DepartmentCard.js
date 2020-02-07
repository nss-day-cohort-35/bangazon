import React, { Component } from 'react'
import DepartmentEdit from './DepartmentEdit'
import { Table, Button, Sidebar } from 'semantic-ui-react'

export default class DepartmentCard extends Component {
    state = {
        visible: false
    }

    handleOpen = () => this.setState({ active: true })
    handleClose = () => this.setState({ active: false })

    render() {
        const { active } = this.state
        return (
            <>
                <br></br>
                <p>Search Results</p>
                <Table size='small' celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Department Name</Table.HeaderCell>
                            <Table.HeaderCell>Budget</Table.HeaderCell>
                            <Table.HeaderCell>Details</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body key={this.props.department.id}>
                        <Table.Row>
                            <Table.Cell width='3'>{this.props.department.name} ({this.props.department.id})</Table.Cell>
                            <Table.Cell width='2'>${this.props.department.budget}</Table.Cell>
                            <Table.Cell width='1'><Button basic color='orange' content='Edit'
                                onClick={() => this.handleOpen()}>
                            </Button></Table.Cell>
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
                    <DepartmentEdit closeSidebar={this.handleClose} department={this.props.department} />
                </Sidebar>
            </>
        )
    }

}
