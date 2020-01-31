import React, { Component } from 'react';
import EmployeeEdit from './EmployeeEdit';
import EmployeeLanding from './EmployeeLanding'
import { List, Button, Icon, Sidebar, Segment } from 'semantic-ui-react'

export default class EmployeeDetails extends Component {

    state = {
        visible: false
    }

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
        if (this.state.visible) {
        this.setState({ visible: false });
        }
        };

    render() {
        console.log(this.state.visible)
        return (
            <>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar.Pusher 
                    dimmed={this.state.visible}
                    onClick={this.closeSidebar}>
                        <Segment basic>
                            <List>
                                <List.Item>
                                    <List.Content>
                                        <p>Profile Pic Goes here</p>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Button onClick={() => {this.toggle()}}
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
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>

                <Sidebar
                    animation='overlay'
                    icon='labeled'
                    inverted='false'
                    onHide={null}
                    vertical='false'
                    visible={this.state.visible}
                    width='thin'
                >
                    <EmployeeEdit />
                </Sidebar>


            </>
        )
    }
}