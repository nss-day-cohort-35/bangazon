import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { Input } from 'semantic-ui-react'
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
                    placeholder='First Nane'
                    label="First Name"
                    onChange={this.handleFieldChange}
                />
                <TextField
                />
                <TextField
                    onChange={this.handleFieldChange}
                    type='lastName'
                    id='lastName'
                    required=''
                    autoFocus=''
                    label='Last Name'
                    margin="dense"
                    variant="outlined"
                />
                <TextField
                    onChange={this.handleFieldChange}
                    type='emailAddress'
                    id='emailAddress'
                    required=''
                    autoFocus=''
                    label='Email Address'
                    margin="dense"
                    variant="outlined"
                />
                <TextField
                    onChange={this.handleFieldChange}
                    type='street'
                    id='streetAddress'
                    required=''
                    autoFocus=''
                    label='Street Address'
                    margin="dense"
                    variant="outlined"
                />
                <TextField
                    onChange={this.handleFieldChange}
                    type='phone'
                    id='phoneNumber'
                    required=''
                    autoFocus=''
                    label='Phone Number'
                    margin="dense"
                    variant="outlined"
                />
                <TextField
                    onChange={this.handleFieldChange}
                    type='city'
                    id='city'
                    required=''
                    autoFocus=''
                    label='City'
                    margin="dense"
                    variant="outlined"
                />
                <TextField
                    onChange={this.handleFieldChange}
                    type='state'
                    id='state'
                    required=''
                    autoFocus=''
                    label='State'
                    margin="dense"
                    variant="outlined"
                />
                <Button
                    className='addCustomerButton'
                    type='primary'
                    disabled={this.state.loadingStatus}
                    onClick={this.handleClick}
                    icon=''
                    variant="contained" size="small" color="primary"
                >
                    Submit
                        </Button>
            </div>
        )

    }
}

export default CustomerAddForm;