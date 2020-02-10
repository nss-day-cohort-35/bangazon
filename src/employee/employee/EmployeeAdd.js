import React, { Component } from 'react';
import APIManager from '../../api/APIManager'
import { Button, Icon, Form, Header, Dropdown } from 'semantic-ui-react'


export default class EmployeeAdd extends Component {

    state = {
        departments: [],
        newFirstName: '',
        newLastName: '',
        newDepartmentId: '',
        isSupervisor: null,
        newComputerId: '',
        newEmail: '',
    }

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    handleDeptDropdownChange = (e, { value }) => this.setState({ departmentId: value })

    handleSupervisorDropdownChange = (e, { value }) => this.setState({ isSupervisor: value })

    addEmployee = evt => {
        evt.preventDefault();
        const newEmployee = {
            firstName: this.state.newFirstName,
            lastName: this.state.newLastName,
            departmentId: parseInt(this.state.departmentId),
            isSupervisor: this.state.isSupervisor,
            computerId: parseInt(this.state.computerId),
            email: this.state.email
        }
        APIManager.addData("employees", newEmployee)
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

        const { dropdownValue } = this.state;

        return (

            <>
                <Form>
                    <br></br>
                    <Header as='h1' color='grey'>Add New Employee
                    </Header>
                    <div className='fifteen wide field'>
                        <label>Employee First Name</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='Enter First Name'
                            id='newFirstName'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Employee Last Name</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='Enter Last Name'
                            id='newLastName'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Choose Department</label>
                        <Dropdown
                            selection
                            placeholder='Department Name'
                            options={deptOptions}
                            value={dropdownValue}
                            onChange={this.handleDeptDropdownChange}
                            id='newDepartmentId'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Grant Supervisor Privileges?</label>
                        <Dropdown
                            selection
                            placeholder='Supervisor Privileges?'
                            options={supervisorOptions}
                            value={dropdownValue}
                            onChange={this.handleSupervisorDropdownChange}
                            id='isSupervisor'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Computer ID</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='Enter Computer ID'
                            id='newComputerId'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>E-mail Address</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='Enter Email Address'
                            id='newEmail'
                        />
                    </div>
                    <Button
                        type='submit'
                        color='orange'
                        onClick={(evt) => this.addEmployee(evt)}>
                        Create New Employee!
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