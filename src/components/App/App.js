import React from 'react';
import { Switch, Route } from 'react-router';

import Header        from 'components/Layout/Nav/Header';
import Footer        from 'components/Layout/Footer/Footer';
import Main          from 'components/Main/Main';
import About         from 'components/About/About';
import Product       from 'components/Product/Product';
import ProductDetail from 'components/Product/ProductDetail/ProductDetail';
import Login         from 'components/Login/Login';
import SignUp        from 'components/SignUp/SignUp';
import Notice        from 'components/CustomerCenter/Notice/Notice';
import ServiceFeq    from 'components/CustomerCenter/ServiceFeq/ServiceFeq';
import MyPageQna     from 'components/Mypage/Qna/MyPageQna';

import './App.css';

const App = props => [
    <Header key={1} />,
    <Routes key={2} />,
    <Footer key={3} />
];

const Routes = props => (
    <div className="contents">
        <Switch>
            <Route exact path="/" component={Main} />
            /** Menu top **/
            <Route exact path="/login" component={Login} />
            <Route exact path="/signUp" component={SignUp} />

            <Route exact path="/about" component={About} />
            <Route exact path="/product" component={Product} />
                <Route exact path="/product_detail" component={ProductDetail} />
            
            {/* <Route exact path="/mypage" component={MyPage} /> */}
            <Route exact path="/notice" component={Notice} />
                <Route exact path="/feq" component={ServiceFeq} />
                <Route exact path="/mypage_qna" component={MyPageQna} />
        </Switch>
    </div>
    
);

export default App;