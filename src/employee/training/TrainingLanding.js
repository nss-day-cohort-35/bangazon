import React, { Component } from 'react';
import TrainingList from './TrainingList';
import TrainingAdd from './TrainingAdd';
import { Sidebar } from 'semantic-ui-react';

export default class TrainingLanding extends Component {
    render() {
        const newActive = (this.props.sidebarState)
        return (
            <>
                <TrainingList />
                <Sidebar
                    animation='push'
                    icon='labeled'
                    inverted='false'
                    onHide={null}
                    vertical='false'
                    visible={newActive}
                    width='wide'
                    direction='right'>
                    <TrainingAdd
                        closeSidebar={this.props.closeSidebar}
                    />
                </Sidebar>
            </>
        )
    }
}