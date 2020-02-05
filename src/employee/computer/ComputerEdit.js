import React, { Component } from 'react';
import APIManager from '../../api/APIManager'
import { Button, Form, Header, Dropdown } from 'semantic-ui-react'


export default class ComputerEdit extends Component {

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

    updateComputer = evt => {
        evt.preventDefault();
        const updatedComputer = {
            id: parseInt(this.props.computer.id),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            departmentId: parseInt(this.state.departmentId),
            isSupervisor: this.state.isSupervisor,
            computerId: parseInt(this.state.computerId),
            email: this.state.email

        }
        APIManager.updateData("computers", updatedComputer)
            .then(() => this.props.closeSidebar())

    };

    render() {
        const booleanOptions = [
            { key: 1, text: 'Yes', value: null },
            { key: 2, text: 'No', value: Date.now() }
        ]

        // const deptOptions = [
        //     { key: 1575559403192, text: 'Marketing', value: 1575559403192 },
        //     { key: 1575559403193, text: 'Engineering', value: 1575559403193 },
        //     { key: 1575559403194, text: 'Accounting', value: 1575559403194 },
        //     { key: 1575559403195, text: 'Legal', value: 1575559403195 }
        // ]

        const { dropdownValue } = this.state;

        return (

            <>
                <Form>
                    <br></br>
                    <Header as='h1' color='grey'>Edit Computer</Header>
                    <Header as='p' color='grey'>Computer ID: {this.props.computer.id}</Header>
                    {/* <div className='fifteen wide field'>
                        <label>Computer First Name</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={this.props.Computer.firstName}
                            id='firstName'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Computer Last Name</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={this.props.Computer.lastName}
                            id='lastName'
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
                            id='departmentId'
                        />
                    </div>*/}
                    <div className='fifteen wide field'>
                        <label>Active or Inactive?</label>
                        <Dropdown
                            selection
                            placeholder='Supervisor Privileges?'
                            options={booleanOptions}
                            value={dropdownValue}
                            onChange={this.handleSupervisorDropdownChange}
                            id='isSupervisor'
                        />
                    </div>
                    {/* <div className='fifteen wide field'>
                        <label>Computer ID</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={this.props.Computer.computerId}
                            id='computerId'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>E-mail Address</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={this.props.Computer.email}
                            id='email'
                        />
                    </div>*/}
                    <Button
                        type='submit'
                        color='orange'
                        content='Edit Computer Info'
                        onClick={(evt) => this.updateComputer(evt)}>

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