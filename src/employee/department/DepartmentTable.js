import React, { Component } from 'react'
import DepartmentEdit from './DepartmentEdit';
import DepartmentAdd from './DepartmentAdd';
import APIManager from '../../api/APIManager'
import { Table, Button, Sidebar } from 'semantic-ui-react'
import '../../App.css';

export default class ComputerTable extends Component {

    state = {
        departments: [],
        storedDepartment: {},
        visible: false,
        newSidebarState: this.props.sidebarState
    }

    componentDidMount() {
        APIManager.getAll("departments")
            .then(response => {
                this.setState({
                    departments: response
                })
            })
    }

    refresh = () => {
        APIManager.getAll("departments")
            .then(response => {
                this.setState({
                    departments: response
                })
            })
    }

    handleOpen = (department) => this.setState({
        active: true,
        storedDepartment: department
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
        const newActive = (this.props.sidebarState)
        console.log(this.state)
        return (
            <>
                <Table size='small' celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Department Name</Table.HeaderCell>
                            <Table.HeaderCell>Budget</Table.HeaderCell>
                            <Table.HeaderCell>Details</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {this.state.departments.map(department => (
                        <Table.Body key={department.id}>
                            <Table.Row>
                                <Table.Cell width='3'>{department.name} ({department.id})</Table.Cell>
                                <Table.Cell width='2'>${department.budget}</Table.Cell>
                                <Table.Cell width='1'><Button basic color='orange' content='Edit'
                                    onClick={() => this.handleOpen(department)}>
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
                    <DepartmentEdit closeSidebar={this.handleClose} refresh={this.refresh} department={this.state.storedDepartment} />
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