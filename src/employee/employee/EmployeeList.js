import React, { Component } from 'react';
import APIManager from '../../api/APIManager';
import EmployeeCard from './EmployeeCard';
import EmployeeAdd from './EmployeeAdd';
import { withRouter } from 'react-router-dom'
import { Sidebar } from 'semantic-ui-react'


class EmployeeList extends Component {
    state = {
        employees: [],
        storedEmployee: ""
    }

    getEmployeeData = () => {
        this.setState({
            storedEmployee: this.props.searchValue
        })
    }


    componentDidMount() {
        if (this.props.searchValue === undefined) {
        } else
            APIManager.searchForEmployeeByName(this.props.searchValue[0], this.props.searchValue[1])
                .then(response => {
                    this.setState({
                        employees: response
                    })
                })
    }


    componentDidUpdate(prevProps, prevState) {

        if (prevProps.searchValue !== this.props.searchValue) {
            APIManager.searchForEmployeeByName(this.props.searchValue[0], this.props.searchValue[1])
                .then(response => {
                    this.setState({
                        employees: response
                    })
                })
        }
    }
    render() {

        const newActive = (this.props.sidebarState)
        console.log("employee state", this.props.searchValue)
        return (
            <>
                {this.props.searchValue === undefined ?
                    <>
                        <div className='imgContainer'>
                            <img src={require("../../images/Empty-State-Charts.png")} className='employeeSearchImg' alt="magnifying glass"></img>
                        </div>
                    </>
                    :
                    <div className='cardContainer'>
                        {this.state.employees.map(employee => (
                            <EmployeeCard
                                key={employee.id}
                                employee={employee}
                                sidebarState={this.props.sidebarState}
                                closeSidebar={this.props.closeSidebar}
                            />
                        ))}
                    </div>
                }
                <Sidebar
                    animation='push'
                    icon='labeled'
                    inverted='false'
                    onHide={null}
                    vertical='false'
                    visible={newActive}
                    width='wide'
                    direction='right'>
                    <EmployeeAdd
                        closeSidebar={this.props.closeSidebar}
                        refresh={this.refresh}
                    />
                </Sidebar>
            </>
        )
    }
}

export default withRouter(EmployeeList)