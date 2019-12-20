import React from 'react';
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import APIManager from '../../api/APIManager';

class CustomerEditForm extends React.Component {

    state = {
        id: "",
        customer: "",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        email: "",
        city: "",
        state: "",
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        let id = "1575559407789"
        // id: this.props.carId,
        APIManager.getById("customers", id).then(customer => {
            console.log("customer edit", customer)
            this.setState({
                id: customer.id,
                customer: customer,
                firstName: customer.firstName,
                lastName: customer.lastName,
                address: customer.address,
                city: customer.city,
                state: customer.state,
                phone: customer.phone,
                email: customer.email,

            })
        })
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    editCustomer = () => {
        // evt.preventDefault();
        if (
            this.state.firstName === '' ||
            this.state.lastName === '' ||
            this.state.address === '' ||
            this.state.phone === '' ||
            this.state.address === '' ||
            this.state.state === '' ||
            this.state.city === ''
        ) {
            window.alert('Please fill out all the fields');
        } else {
            const editedCustomer = {
                id: this.state.id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phone: this.state.phone,
                email: this.state.email,
                state: this.state.state,
                city: this.state.city,
            };
            APIManager.updateData("customers", editedCustomer)
            console.log("customer", editedCustomer)
            // .then(this.props.getData);
        }
    };
    handleClick = evt => {
        evt.preventDefault();
        this.editCustomer();
        // this.onClose();
        document.querySelector('#firstName').value = '';
        document.querySelector('#lastName').value = '';
        document.querySelector('#address').value = '';
        document.querySelector('#phone').value = '';
        document.querySelector('#address').value = '';
        document.querySelector('#state').value = '';
        document.querySelector('#city').value = '';
        this.setState({
            firstName: "",
            lastName: "",
            address: "",
            phone: "",
            email: "",
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
                    value={this.state.firstName}
                    onChange={this.handleFieldChange}
                />
                <Input
                    size='large'
                    id='lastName'
                    placeholder='LastName'
                    label="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleFieldChange}
                />
                <Input
                    size='large'
                    id='phone'
                    placeholder='Phone Number'
                    label="Phone Number"
                    value={this.state.phone}
                    onChange={this.handleFieldChange}
                />
                <Input
                    size='large'
                    id='email'
                    value={this.state.email}
                    placeholder='Email Address'
                    label="Email Address"
                    onChange={this.handleFieldChange}
                />
                <Input
                    size='large'
                    id='address'
                    value={this.state.address}
                    placeholder='Street Address'
                    label="Street Address"
                    onChange={this.handleFieldChange}
                />
                <Input
                    size='large'
                    id='city'
                    value={this.state.city}
                    placeholder='City'
                    label="City"
                    onChange={this.handleFieldChange}
                />
                <Input
                    size='large'
                    id='state'
                    value={this.state.state}
                    placeholder='State'
                    label="State"
                    onChange={this.handleFieldChange}
                />
                <Button
                    color='orange'
                    disabled={this.state.loadingStatus}
                    onClick={this.handleClick}
                    >Edit Customer
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

export default CustomerEditForm;