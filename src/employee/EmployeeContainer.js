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
import DepartmentList from './department/DepartmentList';
import TrainingList from './training/TrainingList'
// import { Sidebar, Segment } from 'semantic-ui-react';

export default class EmployeeContainer extends Component {
    state = {
        addResourceSidebar: false
    }

    handleOpenNewResource = () => this.setState({ addResourceSidebar: true })
    handleCloseNewResource = () => this.setState({ addResourceSidebar: false })

    render() {
        return (
            <>

                <Route path="/" render={props => {
                    return <NavigationBar
                        view="Employees"
                        openSidebar={this.handleOpenNewResource} {...props} />
                }} />

                <SideBar view="Employees" />

                <Route exact path="/employee-portal/" render={props => {
                    return <EmployeeDashboard {...props} />
                }} />

                <Route exact path="/employee-portal/computers/" render={props => {
                    return <ComputerLanding
                        sidebarState={this.state.addResourceSidebar}
                        closeSidebar={this.handleCloseNewResource}  {...props} />
                }} />

                <Route path="/employee-portal/computers/:computerId(\d+)/" render={props => {
                    const searchValue = parseInt(props.match.params.computerId)
                    return <ComputerList
                        searchValue={searchValue}
                        {...props}
                    />
                }} />

                <Route exact path="/employee-portal/training/" render={props => {
                    return <TrainingLanding
                        sidebarState={this.state.addResourceSidebar}
                        closeSidebar={this.handleCloseNewResource}
                        {...props} />
                }} />

                <Route path="/employee-portal/training/:trainingId(\d+)/" render={props => {
                    const searchValue = parseInt(props.match.params.trainingId)
                    return <TrainingList
                        searchValue={searchValue}
                        sidebarState={this.state.addResourceSidebar}
                        closeSidebar={this.handleCloseNewResource}
                        {...props}
                    />
                }} />

                <Route exact path="/employee-portal/employees/" render={props => {
                    return <EmployeeLanding
                        sidebarState={this.state.addResourceSidebar}
                        closeSidebar={this.handleCloseNewResource} {...props} />
                }} />


                <Route path="/employee-portal/employees/:employeeName/" render={props => {
                    const searchName = props.match.params.employeeName
                    const splitName = searchName.split("-")
                    return <EmployeeList
                        searchValue={splitName}
                        sidebarState={this.state.addResourceSidebar}
                        closeSidebar={this.handleCloseNewResource}
                        {...props}
                    />
                }} />

                <Route exact path="/employee-portal/departments" render={props => {
                    return <DepartmentLanding
                        sidebarState={this.state.addResourceSidebar}
                        closeSidebar={this.handleCloseNewResource}{...props} />
                }} />

                <Route path="/employee-portal/departments/:departmentId(\d+)/" render={props => {
                    const searchValue = parseInt(props.match.params.departmentId)
                    return <DepartmentList
                        searchValue={searchValue}
                        sidebarState={this.state.addResourceSidebar}
                        closeSidebar={this.handleCloseNewResource}
                        {...props}
                    />
                }} />

            </>
        )
    }

}