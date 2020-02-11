import React, { Component } from 'react';
import { Card, Divider } from 'semantic-ui-react';

export default class EmployeeDashboard extends Component {
    render() {
        return (
            <>
                <div className='dashboardTopRow'>
                    <Card>
                        <Card.Header>DEPARTMENTS</Card.Header>
                        <Card.Description>Total # of Departments</Card.Description>
                        <Card.Header>4</Card.Header>
                        <Divider></Divider>
                        <Card.Description>Text for the sake of it</Card.Description>
                    </Card>
                    <img src={require('../images/Welcome.png')} alt='welcome flag' ></img>
                </div>
                <div className='dashboardBottomRow'>
                    <Card>
                        <Card.Header>
                            TRAINING
                </Card.Header>
                    </Card>
                    <Card>
                        <Card.Header>
                            EMPLOYEES
                </Card.Header>
                    </Card>
                    <Card>
                        <Card.Header>
                            COMPUTERS
                </Card.Header>
                    </Card>
                </div>
            </>
        )
    }
}