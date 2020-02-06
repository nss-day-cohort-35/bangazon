import React, { Component } from 'react';
import APIManager from '../../api/APIManager'
import { Button, Form, Header, Dropdown } from 'semantic-ui-react'


export default class EmployeeEdit extends Component {

    state = {
        departments: [],
        firstName: '',
        lastName: '',
        departmentId: '',
        isSupervisor: null,
        computerId: '',
        email: '',
    }

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    handleDeptDropdownChange = (e, { value }) => this.setState({ departmentId: value })

    handleSupervisorDropdownChange = (e, { value }) => this.setState({ isSupervisor: value })

    updateEmployee = evt => {
        evt.preventDefault();
        const updatedEmployee = {
            id: parseInt(this.props.employee.id),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            departmentId: parseInt(this.state.departmentId),
            isSupervisor: this.state.isSupervisor,
            computerId: parseInt(this.state.computerId),
            email: this.state.email

        }
        APIManager.updateData("employees", updatedEmployee)
            .then(() => this.props.closeSidebar())

    };

    render() {
        const supervisorOptions = [
            { key: 1, text: 'Yes', value: true },
            { key: 2, text: 'No', value: false }
        ]

        const deptOptions = [
            { key: 1575559403192, text: 'Marketing', value: 1575559403192 },
            { key: 1575559403193, text: 'Engineering', value: 1575559403193 },
            { key: 1575559403194, text: 'Accounting', value: 1575559403194 },
            { key: 1575559403195, text: 'Legal', value: 1575559403195 }
        ]


        return (

            <>
                <Form>
                    <br></br>
                    <Header as='h1' color='grey'>Edit Employee</Header>
                    <Header as='p' color='grey'>Employee ID: {this.props.employee.id}</Header>
                    <div className='fifteen wide field'>
                        <label>Employee First Name</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={this.props.employee.firstName}
                            id='firstName'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Employee Last Name</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={this.props.employee.lastName}
                            id='lastName'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Choose Department</label>
                        <Dropdown
                            selection
                            placeholder='Department Name'
                            options={deptOptions}
                            onChange={this.handleDeptDropdownChange}
                            id='departmentId'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Grant Supervisor Privileges?</label>
                        <Dropdown
                            selection
                            placeholder='Supervisor Privileges?'
                            options={supervisorOptions}
                            onChange={this.handleSupervisorDropdownChange}
                            id='isSupervisor'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Computer ID</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={this.props.employee.computerId}
                            id='computerId'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>E-mail Address</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={this.props.employee.email}
                            id='email'
                        />
                    </div>
                    <Button
                        type='submit'
                        color='orange'
                        onClick={(evt) => this.updateEmployee(evt)}>
                        Edit Employee Info
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