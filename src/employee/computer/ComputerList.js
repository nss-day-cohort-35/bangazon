import React, { Component } from 'react';
import APIManager from '../../api/APIManager';
import ComputerCard from './ComputerCard';
import ComputerTable from './ComputerTable';
import { withRouter } from 'react-router-dom'


class ComputerList extends Component {
    state = {
        computers: [],
        storedComputer: {}
    }

    // getComputerData = () => {
    //     this.setState({
    //         storedComputer: this.props.searchValue
    //     })
    // }


    componentDidMount() {
        if (this.props.searchValue === undefined) {
        } else
            APIManager.getById("computers", this.props.searchValue)
                .then(response => {
                    this.setState({
                        storedComputer: response
                    })
                    console.log("computer response", response)
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
    render() {

        console.log("computers in state", this.state.storedComputer)

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
                        computer={this.state.storedComputer} />
                    </div>
                }
            </>
        )
    }
}

export default withRouter(ComputerList)