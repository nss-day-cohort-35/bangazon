import React, { Component } from 'react';
import APIManager from '../../api/APIManager';
import TrainingAdd from './TrainingAdd';
import TrainingCard from './TrainingCard';
import { withRouter } from 'react-router-dom';
import { Sidebar } from 'semantic-ui-react';


class TrainingList extends Component {
    state = {
        trainings: [],
        storedTraining: {}
    }

    // getTrainingData = () => {
    //     this.setState({
    //         storedTraining: this.props.searchValue
    //     })
    // }

    refresh = () => {
        APIManager.getAll("trainingPrograms")
            .then(response => {
                this.setState({
                    trainings: response
                })
            })
    }

    componentDidMount() {
        if (this.props.searchValue === undefined) {
            APIManager.getAll("trainingPrograms")
                .then(response => {
                    this.setState({
                        trainings: response
                    })
                })
        } else
            APIManager.getById("trainingPrograms", this.props.searchValue)
                .then(response => {
                    this.setState({
                        storedTraining: response
                    })
                })
    }


    componentDidUpdate(prevProps, prevState) {

        if (prevProps.searchValue !== this.props.searchValue) {
            APIManager.getById("trainingPrograms", this.props.searchValue)
                .then(response => {
                    this.setState({
                        trainings: response
                    })
                })
        }
    }
    render() {
        const newActive = (this.props.sidebarState)
        return (
            <>
                <h3>Upcoming Training Events</h3>
                {this.props.searchValue === undefined ?
                    <>
                        <div>
                            {this.state.trainings.map(training => (
                                <TrainingCard
                                    key={training.id}
                                    training={training}
                                    refresh={this.refresh}
                                    sidebarState={this.props.sidebarState}
                                    closeSidebar={this.props.closeSidebar} />
                            ))}

                        </div>
                    </>
                    :
                    <div>

                        <TrainingCard
                            key={this.state.storedTraining.id}
                            training={this.state.storedTraining}
                            sidebarState={this.props.sidebarState}
                            closeSidebar={this.props.closeSidebar} />
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
                    </div>
                }
            </>
        )
    }
}


export default withRouter(TrainingList)