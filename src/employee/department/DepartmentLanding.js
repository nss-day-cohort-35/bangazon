import React, { Component } from 'react';
import DepartmentTable from './DepartmentTable'

export default class DepartmentLanding extends Component {
    render() {
        return (
            <DepartmentTable
                sidebarState={this.props.sidebarState}
                closeSidebar={this.props.closeSidebar} />
        )
    }
}