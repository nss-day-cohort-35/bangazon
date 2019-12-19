import React from 'react';
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import APIManager from '../../api/APIManager';

class CustomerAddForm extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        streetAddress: "",
        emailAddress: "",
        city: "",
        state: "",
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    addCustomer = () => {
        // evt.preventDefault();
        if (
            this.state.firstName === '' ||
            this.state.lastName === '' ||
            this.state.address === '' ||
            this.state.phoneNumber === '' ||
            this.state.emailAddress === '' ||
            this.state.state === '' ||
            this.state.city === ''
        ) {
            window.alert('Please fill out all the fields');
        } else {
            const customer = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                streetAddress: this.state.streetAddress,
                phoneNumber: this.state.phoneNumber,
                emailAddress: this.state.emailAddress,
                state: this.state.state,
                city: this.state.city,
            };
            APIManager.addData("customers", customer)
            console.log("customer", customer)
            // .then(this.props.getData);
        }
    };
    handleClick = evt => {
        evt.preventDefault();
        this.addCustomer();
        // this.onClose();
        document.querySelector('#firstName').value = '';
        document.querySelector('#lastName').value = '';
        document.querySelector('#streetAddress').value = '';
        document.querySelector('#phoneNumber').value = '';
        document.querySelector('#emailAddress').value = '';
        document.querySelector('#state').value = '';
        document.querySelector('#city').value = '';
        this.setState({
            firstName: "",
            lastName: "",
            streetAddress: "",
            phoneNumber: "",
            emailAddress: "",
            city: "",
            state: "",
        })
    };
    render() {
        return (

            <div className="addForm">
                <Input
                    size='large'
                    id='firstName'
                    placeholder='First Name'
                    label="First Name"
                    onChange={this.handleFieldChange}
                />
                <Input
                    size='large'
                    id='lastName'
                    placeholder='LastName'
                    label="Last Name"
                    onChange={this.handleFieldChange}
                />
                <Input
                    size='large'
                    id='phoneNumber'
                    placeholder='Phone Number'
                    label="Phone Number"
                    onChange={this.handleFieldChange}
                />
                <Input
                    size='large'
                    id='emailAddress'
                    placeholder='Email Address'
                    label="Email Address"
                    onChange={this.handleFieldChange}
                />
                <Input
                    size='large'
                    id='streetAddress'
                    placeholder='Street Address'
                    label="Street Address"
                    onChange={this.handleFieldChange}
                />
                <Input
                    size='large'
                    id='city'
                    placeholder='City'
                    label="City"
                    onChange={this.handleFieldChange}
                />
                <Input
                    size='large'
                    id='state'
                    placeholder='State'
                    label="State"
                    onChange={this.handleFieldChange}
                />
                <Button
                    color='orange'
                    disabled={this.state.loadingStatus}
                    onClick={this.handleClick}
                    >Add Customer
                </Button>
                <Button
                    basic
                    color='orange'
                    disabled={this.state.loadingStatus}
                    onClick={this.handleClick}
                    >Cancel
                </Button>
            </div>
        )

    }
}

export default CustomerAddForm;