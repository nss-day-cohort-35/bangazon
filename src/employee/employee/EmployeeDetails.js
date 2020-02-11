import React, { Component, } from 'react';
import EmployeeEdit from './EmployeeEdit';
import { List, Button, Icon, Sidebar, Divider } from 'semantic-ui-react'


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
                    <div className='detailsCardFlexRow'>
                        <List.Item>
                            <List.Content>
                                <div className='detailsCardImage'>
                                <img src={require("../../images/Card-Ribbon.png")} className='cardRibbon' alt="Ribbon"></img>
                                </div>
                            </List.Content>
                        </List.Item>
                        <div className='detailsCardInfo'>
                            <List.Item className='headerButtonContainer'>
                                <div className='cardHeader'>
                                    <List.Content>
                                        <h4 className='detailsEmployeeName'>{this.props.employee.firstName} {this.props.employee.lastName}</h4>
                                    </List.Content>
                                </div>
                                <div className='cardEditButton'>
                                    <Button onClick={this.handleOpen} size='tiny' icon >
                                        <Icon name='pencil alternate' />
                                    </Button>
                                </div>
                            </List.Item>
                            <div className='cardContent'>
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

                                <Divider></Divider>
                                <List.Item>
                                    <List.Content> <h4>Upcoming Events</h4></List.Content>
                                </List.Item>
                            </div>
                        </div>
                    </div>
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