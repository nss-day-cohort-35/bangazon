import React, { Component } from 'react';
import APIManager from '../../api/APIManager'
import { Button, Form, Header } from 'semantic-ui-react'
import '../../App.css'


export default class DepartmentAdd extends Component {

    state = {
        newName: '',
        newBudget: ''
    }

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }


    addDepartment = evt => {
        evt.preventDefault();
        const newDepartment = {
            name: this.state.newName,
            budget: this.state.newBudget
        }
        APIManager.addData("departments", newDepartment)
            .then( () => this.props.refresh())
        this.props.closeSidebar()

    };

    render() {
        return (

            <>
                <Form>
                    <br></br>
                    <Header as='h1' color='grey'>Add New Department</Header>
                    <div><img src={require('../../images/API.png')} alt="Computer" className="computerImage" /></div>
                    <div className='fifteen wide field'>
                        <label>Department Name</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='Enter Department Name'
                            id='newName'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Department Budget</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='Enter Department Budget'
                            id='newBudget'
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