import React, { Component } from 'react';
import APIManager from '../../api/APIManager';
import { Button, Form, Header } from 'semantic-ui-react';
import moment from 'moment';


export default class TrainingAdd extends Component {

    state = {
        newTrainingName: '',
        newStartDate: '',
        newEndDate: '',
        newMaxAttendees: ''
    }

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }


    addTraining = evt => {
        evt.preventDefault();
        const newTraining = {
            name: this.state.newTrainingName,
            startDate: this.state.newStartDate,
            endDate: this.state.newEndDate,
            maxAttendees: this.state.newMaxAttendees

        }
        APIManager.addData("trainingPrograms", newTraining)
            .then(() => this.props.refresh())
            this.props.closeSidebar()

    };

    render() {
        return (
            <>
                <Form>
                    <br></br>
                    <Header as='h1' color='grey'>Create Training</Header>
                    <div className='fifteen wide field'>
                        <label>Training Name</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='Enter Training Name'
                            id='newTrainingName'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Start Date</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='MM/DD/YYYY'
                            id='newStartDate'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>End Date</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='MM/DD/YYYY'
                            id='newEndDate'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Max Attendees</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='Number of Attendees?'
                            id='newMaxAttendees'
                        />
                    </div>
                    <Button
                        type='submit'
                        color='orange'
                        onClick={(evt) => this.addTraining(evt)}>
                        Create Training Event
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