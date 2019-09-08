import React from 'react';
import { Switch, Route } from 'react-router';

import Header  from 'components/Layout/Nav/Header';
import Footer  from 'components/Layout/Footer/Footer';
import Main    from 'components/Main/Main';
import About   from 'components/About/About';
import Product from 'components/Product/Product';
import Login   from 'components/Login/Login';
import Mypage  from 'components/Mypage/Mypage';
import Notice  from 'components/CustomerCenter/Notice/Notice';

import './App.css';

const App = props => [
    <Header key={1} />,
    <Routes key={2} />,
    <Footer key={3} />
];

const Routes = props => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/notice" component={Notice} />
    </Switch>
);

export default App;