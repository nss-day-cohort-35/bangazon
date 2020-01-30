// import React, { Component } from 'react';
// import EmployeeContainer from './employee/EmployeeContainer';
// import SearchBar from './nav/SearchBar';

// export default class Connector extends Component {
//     state = {
//         searchValue: '',
//     }

//     handleChange(e) {
//         this.setState({
//             searchValue: e.target.value
//         })
//     }

//     render() {
//         return (
//             <>
//                 <EmployeeContainer
//                 searchValue={this.state.searchValue}
//                 />

//                 <SearchBar
//                     handleChange={this.handleChange}
//                     searchValue={this.state.searchValue}
//                 />
//             </>
//         )
//     }
// }