import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import Landing from './Landing';

ReactDOM.render(
    <Router>
        <Landing />
    </Router>
    , document.getElementById('root'));

