import React, { Component } from 'react';
import APIManager from '../../api/APIManager'
import { Button, Form, Header } from 'semantic-ui-react'


export default class DepartmentEdit extends Component {

    state = {
        departments: [],
        name: '',
        budget: ''
    }

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    updateDepartment = evt => {
        evt.preventDefault();
        const updatedDepartment = {
            id: this.props.department.id,
            name: this.state.name,
            budget: this.state.budget

        }
        console.log()
        APIManager.updateData("departments", updatedDepartment)
            .then(() => this.props.refresh())
            this.props.closeSidebar()

    };

    render() {

        return (

            <>
                <Form>
                <div className='purpleHeader'>
                    <Header as='h1'className='slideBarHeader'>Edit Department</Header>
                    <Header as='p'className='slideBarSubheader'>Department ID: {this.props.department.id}</Header>
                    </div>
                    <div className='slideBarImg'><img src={require('../../images/Departments.png')} alt="Computer" className="departmentImage" /></div>
                    <div className='fifteen wide field'>
                        <label>Department Name</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={this.props.department.name}
                            id='name'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Department Budget</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={this.props.department.budget}
                            id='budget'
                        />
                    </div>
                    <div className='slideBarButtonContainer'>
                    <Button
                        type='submit'
                        color='orange'
                        onClick={(evt) => this.updateDepartment(evt)}>
                        Edit Department Info
                        </Button>
                    <Button
                        basic
                        color='orange'
                        content='Cancel'
                        onClick={this.props.closeSidebar} />
                        </div>
                </Form>

            </>
        )
    }
}