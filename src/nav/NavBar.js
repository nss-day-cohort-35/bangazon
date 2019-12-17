import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class NavigationBar extends Component {
    state = {
        view: ""
    }


    render() {
        return (
            <>
                <h1>{this.props.view}</h1>
                {(this.props.view === "Employees") ?

                    <button><Link to="/customer-portal">Go to Customer Portal</Link></button>
                    :
                    <button><Link to="/employee-portal">Go to Employee Portal</Link></button>
                }
            </>
        )
    }

}