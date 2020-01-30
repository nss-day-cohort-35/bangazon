import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from '../nav/NavBar'
import ComputerLanding from './computer/ComputerLanding'
import TrainingLanding from './training/TrainingLanding'
import EmployeeLanding from './employee/EmployeeLanding'
import DepartmentLanding from './department/DepartmentLanding'
import EmployeeDashboard from './EmployeeDashboard'
import SideBar from '../nav/SideBar'
// import EmployeeCard from './employee/EmployeeCard';
// import EmployeeDetails from './employee/EmployeeDetails';
import EmployeeList from './employee/EmployeeList';

export default class EmployeeContainer extends Component {

    render() {
        return (
            <>
                <NavigationBar view="Employees" />

                <SideBar view="Employees" />

                <Route exact path="/employee-portal/" render={props => {
                    return <EmployeeDashboard {...props} />
                }} />

                <Route exact path="/employee-portal/computers" render={props => {
                    return <ComputerLanding {...props} />
                }} />

                <Route exact path="/employee-portal/training" render={props => {
                    return <TrainingLanding {...props} />
                }} />

                <Route exact path="/employee-portal/employees" render={props => {
                    return <EmployeeLanding  {...props} />
                }} />

                <Route path="/employee-portal/employees/:employeeName/" render={props => {
                    const searchName = props.match.params.employeeName
                    const splitName = searchName.split("-")
                    console.log("this is splitName", splitName)
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