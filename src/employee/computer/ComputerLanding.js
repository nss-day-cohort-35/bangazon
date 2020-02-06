import React, { Component } from 'react';
import ComputerTable from './ComputerTable';

export default class ComputerLanding extends Component {
    render() {
        return (
            <>
                <ComputerTable sidebarState={this.props.sidebarState} closeSidebar={this.props.closeSidebar} {...this.props} />
            </>

        )
    }
}