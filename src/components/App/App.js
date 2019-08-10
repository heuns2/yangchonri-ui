import React from 'react';
import { Link, Switch, Route } from 'react-router';
import Header  from 'components/Nav/Header';
import Main  from 'components/Main/Main';
import About  from 'components/About/About';
import './App.css';

const App = props => [
    <Header key={1} />,
    <Routes key={2} />
];

const Routes = props => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
    </Switch>
);

export default App;