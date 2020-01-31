import React, { Component } from 'react';
import { Button, Form, Dropdown } from 'semantic-ui-react'


export default class EmployeeEdit extends Component {

    state = {
        employeeFirstName: '',
        employeeLastName: '',
        department: '',
    }

    render() {
        return (
            <>
                <Form>
                    <Form.Field>
                        <label>Employee First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Employee Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                        <Dropdown text='Choose Department'>
                            <Dropdown.Menu>
                                <Dropdown.Item text='New' />
                                <Dropdown.Item text='New' />
                                <Dropdown.Item text='New' />
                                <Dropdown.Item text='New' />
                                <Dropdown.Item text='New' />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Field>
                    <Form.Field>
                        <label>Supervisor Name</label>
                        <input placeholder='Supervisor Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>E-mail Address</label>
                        <input placeholder='E-mail Address' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>

            </>
        )
    }
}