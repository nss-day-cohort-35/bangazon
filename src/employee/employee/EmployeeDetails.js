import React, { Component, } from 'react';
import EmployeeEdit from './EmployeeEdit';
import { List, Button, Icon, Sidebar } from 'semantic-ui-react'


export default class EmployeeDetails extends Component {
    state = {
        visible: false

    }

    handleOpen = () => this.setState({ active: true })
    handleClose = () => this.setState({ active: false })

    render() {
        const { active } = this.state
        console.log("active", active)
        return (
            <>
                <List>
                    <List.Item>
                        <List.Content>
                            <p>Profile Pic Goes here</p>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Button
                            onClick={this.handleOpen}
                            icon
                        >
                            <Icon name='pencil alternate' />
                        </Button>
                        <List.Content>
                            <h4>{this.props.employee.firstName} {this.props.employee.lastName}</h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <h5>Employee ID No: {this.props.employee.id}</h5>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <h5>Computer ID No: {this.props.employee.computerId}</h5>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <h5>Computer Name: MacBook Pro</h5>
                        </List.Content>
                        <br></br>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='mailto:'>{this.props.employee.email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>Nashville, TN</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Supervisor: eh</List.Content>
                    </List.Item>
                    <hr></hr>
                    <List.Item>
                        <List.Content> <h4>Upcoming Events</h4></List.Content>
                    </List.Item>
                </List>
                <Sidebar
                    animation='push'
                    icon='labeled'
                    onHide={null}
                    vertical='true'
                    visible={active}
                    width='wide'
                    direction='right'
                >
                    <EmployeeEdit
                        closeSidebar={this.handleClose}
                        employee={this.props.employee}
                        id={this.props.employee.id} />
                </Sidebar>
            </>
        )
    }
}