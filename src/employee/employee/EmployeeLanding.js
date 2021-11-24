import React, { Component } from 'react';
import EmployeeList from './EmployeeList'
import EmployeeAdd from './EmployeeAdd'
import { Sidebar } from 'semantic-ui-react'
export default class EmployeeLanding extends Component {

    render() {
        const newActive = (this.props.sidebarState)

        return (
            <>
                <EmployeeList />
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