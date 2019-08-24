import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


import App from './components/App/App';

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById("root")
);