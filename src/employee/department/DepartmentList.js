import React, { Component } from 'react';
import APIManager from '../../api/APIManager';
import DepartmentCard from './DepartmentCard';
import { withRouter } from 'react-router-dom'


class DepartmentList extends Component {
    state = {
        Departments: [],
        storedDepartment: {}
    }

    // getDepartmentData = () => {
    //     this.setState({
    //         storedDepartment: this.props.searchValue
    //     })
    // }


    componentDidMount() {
        if (this.props.searchValue === undefined) {
        } else
            APIManager.getById("departments", this.props.searchValue)
                .then(response => {
                    this.setState({
                        storedDepartment: response
                    })
                    console.log("Department response", response)
                })
    }


    componentDidUpdate(prevProps, prevState) {

        if (prevProps.searchValue !== this.props.searchValue) {
            APIManager.getById("departments", this.props.searchValue)
                .then(response => {
                    this.setState({
                        storedDepartment: response
                    })
                })
        }
    }
    render() {

        console.log("Departments in state", this.state.storedDepartment)

        return (
            <>
                {this.props.searchValue === undefined ?
                    <>
                        <img src={require("../../images/Empty-State-Charts.png")} alt="magnifying glass"></img>
                    </>
                    :
                    <div>

                        <DepartmentCard
                            key={this.state.storedDepartment.id}
                            department={this.state.storedDepartment}
                            sidebarState={this.props.sidebarState}
                            closeSidebar={this.props.closeSidebar} />
                    </div>
                }
            </>
        )
    }
}

export default withRouter(DepartmentList)