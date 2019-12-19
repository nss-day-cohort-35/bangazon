import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import Landing from './Landing';
import CustomerAddForm from './customer/customers/CustomerAdd'

ReactDOM.render(
    <Router>
        <Landing />
        <CustomerAddForm />
    </Router>
    , document.getElementById('root'));

