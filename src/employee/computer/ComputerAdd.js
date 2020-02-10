import React, { Component } from 'react';
import APIManager from '../../api/APIManager'
import { Button, Form, Header, Dropdown } from 'semantic-ui-react'
import moment from 'moment';
import '../../App.css'


export default class ComputerAdd extends Component {

    state = {
        newPurchaseDate: '',
        decomissionDate: null,
        newMake: '',
        newModel: ''
    }

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    handleDropdownChange = (e, { value }) => this.setState({ decomissionDate: value })

    addComputer = evt => {
        evt.preventDefault();
        const newComputer = {
            purchaseDate: moment(this.state.newPurchaseDate, 'MM/DD/YYYY', true).format(),
            decomissionDate: this.state.decomissionDate,
            make: this.state.newMake,
            model: this.state.newModel
        }
        APIManager.addData("computers", newComputer)
            this.props.closeSidebar()
            this.props.history.push("/employee-portal/computers/")


    };

    render() {
console.log(this.props)
        const booleanOptions = [
            { key: 1, text: 'Active', value: 0 },
            { key: 2, text: 'Inactive', value: false }
        ]

        return (

            <>
                <Form>
                    <br></br>
                    <Header as='h1' color='grey'>Add New Computer</Header>
                    <div><img src={require('../../images/API.png')} alt="Computer" className="computerImage" /></div>
                    <div className='fifteen wide field'>
                        <label>Purchase Date</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='MM/DD/YYYY'
                            id='newPurchaseDate'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Active or Inactive</label>
                        <Dropdown
                            selection
                            placeholder='Set Active Status'
                            options={booleanOptions}
                            onChange={this.handleDropdownChange}
                            id='decomissionDate'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Computer Make</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='Enter Computer Make'
                            id='newMake'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Computer Model</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder='Enter Computer Model'
                            id='newModel'
                        />
                    </div>
                    <Button
                        type='submit'
                        color='orange'
                        onClick={(evt) => this.addComputer(evt)}>
                        Add New Computer!
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