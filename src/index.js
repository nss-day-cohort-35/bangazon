import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import Landing from './Landing';
import CustomerAddForm from './customer/customers/CustomerAdd'
import CustomerEditForm from './customer/customers/CustomerEdit'

ReactDOM.render(
    <Router>
        <Landing />
        <CustomerEditForm />
    </Router>
    , document.getElementById('root'));

