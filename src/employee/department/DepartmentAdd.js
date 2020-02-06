import React, { Component } from 'react';
import APIManager from '../../api/APIManager'
import { Button, Form, Header } from 'semantic-ui-react'
import '../../App.css'


export default class DepartmentAdd extends Component {

    state = {
        id: '',
        name: '',
        budget: ''
    }

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }


    addDepartment = evt => {
        evt.preventDefault();
        const newDepartment = {
            id: this.state.id,
            name: this.state.name,
            budget: this.state.budget
        }
        APIManager.addData("departments", newDepartment)
            .then(() => this.props.refresh())
        this.props.closeSidebar()

    };

    render() {

        return (

            <>
                <Form>
                    <br></br>
                    <Header as='h1' color='grey'>Add New Computer</Header>
                    <div><img src={require('../../images/API.png')} alt="Computer" className="computerImage" /></div>
                    <div className='fifteen wide field'>
                        <label>Department ID</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='Enter Department ID'
                            id='id'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Department Name</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='Enter Department Name'
                            id='name'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Department Budget</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='Enter Department Budget'
                            id='budget'
                        />
                    </div>
                    <Button
                        type='submit'
                        color='orange'
                        onClick={(evt) => this.addDepartment(evt)}>
                        Add New Department!
                        </Button>
                    <Button
                        basic
                        color='orange'
                        content='Cancel'
                        onClick={this.props.closeSidebar} /></Form>
            </>
        )
    }
}