import React, {Component} from 'react';
import NavigationBar from '../nav/NavBar'
import SideBar from '../nav/SideBar'

export default class CustomerContainer extends Component {
 render() {
     return (
         <>
         <NavigationBar view="Customers"/>
             <p>Customer Container</p>
             <SideBar view="Customers"/>
         </>
     )
 }

}