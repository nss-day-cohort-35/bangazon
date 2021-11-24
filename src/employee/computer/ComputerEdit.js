import React, { Component } from 'react';
import APIManager from '../../api/APIManager'
import { Button, Form, Header, Dropdown } from 'semantic-ui-react'
import moment from 'moment';
import '../../App.css'




export default class ComputerEdit extends Component {

    state = {
        purchaseDate: '',
        decomissionDate: null,
        make: '',
        model: ''
    }

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    handleDropdownChange = (e, { value }) => this.setState({
        decomissionDate: value
    })


    updateComputer = evt => {
        evt.preventDefault();
        const updatedComputer = {
            id: this.props.computer.id,
            purchaseDate: moment(this.state.purchaseDate, 'MM/DD/YYYY', true).format(),
            decomissionDate: this.state.decomissionDate,
            make: this.state.make,
            model: this.state.model
        }
        APIManager.updateData("computers", updatedComputer)
            .then(() => this.props.refresh())
        this.props.closeSidebar()
    };

    render() {
        let date = moment(Date.now()).format()
        const booleanOptions = [
            { key: 1, text: 'Active', value: 0 },
            { key: 2, text: 'Inactive', value: date }
        ]
        console.log('date', date)
        return (
            <>
                <Form>
                    <div className='purpleHeader'>
                        <Header as='h1' className='slideBarHeader'>Edit Computer</Header>
                        <Header as='p' className='slideBarSubheader'>Computer ID: {this.props.computer.id}</Header>
                    </div>
                    <div className='slideBarImg'><img src={require('../../images/API.png')} alt="Computer" className="computerImage" /></div>
                    <div className='fifteen wide field'>
                        <label>Purchase Date</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={moment(this.props.computer.purchaseDate).format('MM/DD/YYYY')}
                            id='purchaseDate'
                        />
                    </div>
                    <div className='fifteen wide field'>
                        <label>Active or Inactive?</label>
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
                            placeholder={this.props.computer.make}
                            id='make'
                        />
                    </div>

                    <div className='fifteen wide field'>
                        <label>Computer Model</label>
                        <input
                            onChange={this.handleFieldChange}
                            placeholder={this.props.computer.model}
                            id='model'
                        />
                    </div>
                    <div className='slideBarButtonContainer'>
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
                    </div>
                    <br></br>
                </Form>

            </>
        )
    }
}