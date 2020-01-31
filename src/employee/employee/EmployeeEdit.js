import React, { Component } from 'react';
import { Button, Sidebar, Segment, Form } from 'semantic-ui-react'


export default class EmployeeEdit extends Component {
state = {
    visible = false,
}

    render() {
        return (

            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Form}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
                    width='thin'
                ></Sidebar>
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Sidebar.Pushable>

        )
    }
}