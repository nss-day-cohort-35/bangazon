import React, { Component } from 'react';
import ComputerList from './ComputerList';
import ComputerTable from './ComputerTable';
import APIManager from '../../api/APIManager';

export default class ComputerLanding extends Component {
    

    render() {
        return (
            <>

                <ComputerTable />

            </>

        )
    }
}