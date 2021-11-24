import React, { Component } from 'react'
import DepartmentEdit from './DepartmentEdit';
import DepartmentAdd from './DepartmentAdd';
import { Table, Button, Sidebar, Icon } from 'semantic-ui-react';
import APIManager from '../../api/APIManager';

export default class DepartmentCard extends Component {
    state = {
        visible: false,
        departments: []
    }

    handleOpen = () => this.setState({ active: true })
    handleClose = () => this.setState({ active: false })

    getDepartmentsAndEmployees = () => {
        APIManager.getDeptWithEmployees(this.props.department.id)
            .then(response => {
                this.setState({
                    departments: response
                })
            })
    }

    render() {
        const { active } = this.state
        const newActive = (this.props.sidebarState)
        console.log("departments with employees", this.state.departments)
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
                            <Table.Cell width='3'> {this.props.department.name} ({this.props.department.id})</Table.Cell>
                            <Table.Cell width='2'>${this.props.department.budget}</Table.Cell>
                            <Table.Cell width='1'><Button basic icon
                                onClick={() => this.handleOpen()}><Icon name='pencil alternate' />
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
                <Sidebar
                    animation='push'
                    icon='labeled'
                    inverted='false'
                    onHide={null}
                    vertical='false'
                    visible={newActive}
                    width='wide'
                    direction='right'>
                    <DepartmentAdd
                        closeSidebar={this.props.closeSidebar}
                        refresh={this.refresh}
                    />
                </Sidebar>
            </>
        )
    }

}
