import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from '../nav/NavBar'
import ComputerLanding from './computer/ComputerLanding'
import TrainingLanding from './training/TrainingLanding'
import EmployeeLanding from './employee/EmployeeLanding'
import DepartmentLanding from './department/DepartmentLanding'
import EmployeeDashboard from './EmployeeDashboard'
import SideBar from '../nav/SideBar'
import EmployeeList from './employee/EmployeeList';
import ComputerList from './computer/ComputerList';
// import { Sidebar, Segment } from 'semantic-ui-react';

export default class EmployeeContainer extends Component {
    // state = {
    //     visible: false,
    //     active: true
    // }

    // handleOpen = () => this.setState({ active: true })
    // handleClose = () => this.setState({ active: false })

    render() {
        // const { active } = this.state
        return (
            <>

                <Route path="/" render={props => {
                    return <NavigationBar view="Employees" {...props} />
                }} />
                <SideBar view="Employees" />

                <Route exact path="/employee-portal/" render={props => {
                    return <EmployeeDashboard {...props} />
                }} />

                <Route exact path="/employee-portal/computers/" render={props => {
                    return <ComputerLanding {...props} />
                }} />

                <Route path="/employee-portal/computers/:computerId(\d+)/" render={props => {
                    const searchValue = parseInt(props.match.params.computerId)
                    return <ComputerList
                        searchValue={searchValue}
                        {...props}
                    />
                }} />

                <Route exact path="/employee-portal/training/" render={props => {
                    return <TrainingLanding {...props} />
                }} />

                <Route exact path="/employee-portal/employees/" render={props => {
                    return <EmployeeLanding  {...props} />
                }} />


                <Route path="/employee-portal/employees/:employeeName/" render={props => {
                    const searchName = props.match.params.employeeName
                    const splitName = searchName.split("-")
                    return <EmployeeList
                        searchValue={splitName}
                        {...props}
                    />
                }} />

                <Route exact path="/employee-portal/departments" render={props => {
                    return <DepartmentLanding {...props} />
                }} />

            </>
        )
    }

}