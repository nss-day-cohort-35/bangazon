import React, { Component, } from 'react';
import TrainingEdit from './TrainingEdit';
import { List, Button, Icon, Sidebar, Modal} from 'semantic-ui-react'
import APIManager from '../../api/APIManager';


export default class EmployeeDetails extends Component {
    state = {
        visible: false

    }

    deleteTraining = () => {
        APIManager.deleteData("trainingPrograms", this.props.training.id)
            .then(() => this.props.refresh())
    }

    handleOpen = () => this.setState({ active: true })
    handleClose = () => this.setState({ active: false })

    handleModalOpen = () => this.setState({ modalActive: true })
    handleModalClose = () => this.setState({ modalActive: false })

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
        const { active } = this.state
        const { modalActive } = this.state
        console.log("active", active)
        return (
            <>
                <List>
                    <List.Item>
                        <List.Content>
                            <p>Event Pic Goes here</p>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <h4>{this.props.training.name}</h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Button onClick={this.toggle}
                            onClick={this.handleOpen}
                            icon
                        >
                            <Icon name='pencil alternate' />
                        </Button>
                        <Button basic color='orange' onClick={null}>Add Employees</Button>
                        <Button color='red' onClick={this.handleModalOpen}>Cancel Training</Button>
                    </List.Item>
                </List>
                <Sidebar
                    animation='push'
                    icon='labeled'
                    vertical='true'
                    visible={active}
                    width='wide'
                    direction='right'
                >
                    <TrainingEdit
                        closeSidebar={this.handleClose}
                        training={this.props.training}
                        id={this.props.training.id} />
                </Sidebar>
                <Modal size='tiny' open={modalActive} onClose={null}>
                    <Modal.Header>Cancel Training</Modal.Header>
                    <Modal.Content>
                        <p>Are you sure you want to cancel this training?</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={this.handleModalClose}>No</Button>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='Yes'
                            onClick={this.deleteTraining}
                        />
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}