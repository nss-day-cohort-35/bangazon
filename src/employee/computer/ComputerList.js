import React, { Component } from 'react';
import APIManager from '../../api/APIManager';
import ComputerCard from './ComputerCard';
import ComputerTable from './ComputerTable';
import ComputerAdd from './ComputerAdd';
import { withRouter } from 'react-router-dom'
import { Sidebar } from 'semantic-ui-react';

class ComputerList extends Component {
    state = {
        computers: [],
        storedComputer: {}
    }


    componentDidMount() {
        if (this.props.searchValue === undefined) {
        } else
            APIManager.getById("computers", this.props.searchValue)
                .then(response => {
                    this.setState({
                        storedComputer: response
                    })
                })
    }


    componentDidUpdate(prevProps, prevState) {

        if (prevProps.searchValue !== this.props.searchValue) {
            APIManager.getById("computers", this.props.searchValue)
                .then(response => {
                    this.setState({
                        storedComputer: response
                    })
                })
        }
    }

    refresh = () => {
        APIManager.getAll("computers")
            .then(response => {
                this.setState({
                    computers: response
                })
            })
    }

    render() {
        const newActive = this.props.sidebarState
        console.log("props", this.props)

        return (
            <>
                {this.props.searchValue === undefined ?
                    <>
                        <img src={require("../../images/Empty-State-Charts.png")} alt="magnifying glass"></img>
                    </>
                    :
                    <div>
                        {this.state.computers.map(computer => (
                            <ComputerTable
                                key={computer.id}
                                computer={computer}
                            />
                        ))}
                        <ComputerCard
                            key={this.state.storedComputer.id}
                            computer={this.state.storedComputer}
                            sidebarState={this.state.addResourceSidebar}
                            closeSidebar={this.handleCloseNewResource}
                            refresh={this.refresh} />
                        <Sidebar
                            animation='push'
                            icon='labeled'
                            inverted='false'
                            onHide={null}
                            vertical='true'
                            visible={newActive}
                            width='wide'
                            direction='right'
                        >
                            <ComputerAdd closeSidebar={this.props.closeSidebar} computer={this.props.computer} refresh={this.refresh} />
                        </Sidebar>
                    </div>
                }
            </>
        )
    }
}

export default withRouter(ComputerList)