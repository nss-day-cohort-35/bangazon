import React, { Component } from 'react';
import TrainingDetails from './TrainingDetails';
import { Card } from 'semantic-ui-react'
import moment from 'moment';


export default class TrainingCard extends Component {
    state = {
        cardVisible: false,
    }

    trainingDetailsToggle = () => {
        if (this.state.cardVisible === false) {
            this.setState({
                cardVisible: true
            })
        } else {
            this.setState({
                cardVisible: false
            })
        }
    }

    render() {

        return (
            <>
                <Card link onClick={() => {
                    this.trainingDetailsToggle()
                }}>
                    <h4>{this.props.training.name}</h4>
                    Start Date: {moment(this.props.training.startDate).format('MM/DD/YYYY')}<br></br>
                    End Date: {moment(this.props.training.endDate).format('MM/DD/YYYY')}<br></br>
                    Capacity: {this.props.training.maxAttendees}
                </Card>
                {this.state.cardVisible === true ?
                    <>
                        <Card>
                            <TrainingDetails
                                toggle={this.props.toggle}
                                refresh={this.props.refresh}
                                training={this.props.training}
                                id={this.props.training.id} />
                        </Card>
                    </>
                    : null
                }
            </>
        )
    }
}