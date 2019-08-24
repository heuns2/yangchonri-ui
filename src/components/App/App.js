import React from 'react';
import { Link, Switch, Route } from 'react-router';

import Header  from 'components/Nav/Header';
import Main  from 'components/Main/Main';
import About  from 'components/About/About';
import Product  from 'components/Product/Product';
import Login  from 'components/Login/Login';
import Mypage  from 'components/Mypage/Mypage';
import './App.css';

const App = props => [
    <Header key={1} />,
    <Routes key={2} />
];

const Routes = props => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Mypage" component={Mypage} />
    </Switch>
);

export default App;