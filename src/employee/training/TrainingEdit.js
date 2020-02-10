import React, { Component } from 'react';
import APIManager from '../../api/APIManager';
import { Button, Form, Header } from 'semantic-ui-react';
import moment from 'moment';


export default class TrainingEdit extends Component {

    state = {
        trainingName: '',
        startDate: '',
        endDate: '',
        maxAttendees: ''
    }

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }


    updateTraining = evt => {
        evt.preventDefault();
        const updatedTraining = {
            id: parseInt(this.props.training.id),
            name: this.state.trainingName,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            maxAttendees: this.state.maxAttendees

        }
        APIManager.updateData("trainingPrograms", updatedTraining)
            .then(() => this.props.refresh())

    };

    render() {
        return (

            <>
                <Form>
                    <br></br>
                    <Header as='h1' color='grey'>Edit Training</Header>
                    <Header as='p' color='grey'>Training ID: {this.props.training.id}</Header>
                    <div className='fifteen wide field'>
                        <label>Training Name</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={this.props.training.name}
                            id='trainingName'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Start Date</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={moment(this.props.training.startDate).format('MM/DD/YYYY')}
                            id='startDate'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>End Date</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={moment(this.props.training.endDate).format('MM/DD/YYYY')}
                            id='endDate'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Max Attendees</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={this.props.training.maxAttendees}
                            id='maxAttendees'
                        />
                    </div>
                    <Button
                        type='submit'
                        color='orange'
                        onClick={(evt) => this.updateTraining(evt)}>
                        Edit Training Info
                        </Button>
                    <Button
                        basic
                        color='orange'
                        content='Cancel'
                        onClick={this.props.closeSidebar} />
                </Form>

            </>
        )
    }
}