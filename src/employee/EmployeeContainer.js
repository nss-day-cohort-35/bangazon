import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from '../nav/NavBar'
import ComputerLanding from './computer/ComputerLanding'
import TrainingLanding from './training/TrainingLanding'
import SideBar from '../nav/SideBar'

export default class EmployeeContainer extends Component {
    render() {
        return (
            <>
                <NavigationBar view="Employees" />
                <p>Employee Container</p>
                <SideBar view="Employees" />

                <Route exact path="/employee-portal/computers" render={props => {
                    return <ComputerLanding {...props} />
                }} />

                <Route exact path="/employee-portal/training" render={props => {
                    return <TrainingLanding {...props} />
                }} />
            </>
        )
    }

}