import React from "react";

import {Container, Row, Col, NavLink, NavItem} from "shards-react";
import "./Footer.css";

export default class Header extends React.Component {
    render(){
        return (
                <footer className="page-footer special-color-white">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-md-5 mt-md-0 mt-3">
                                <h5 className="text-uppercase">고객센터</h5>
                                <p className="tit">031-943-0377</p>
                                <div className="custom-center_box">
                                    <h5>1:1 문의</h5>
                                    <ul>
                                        <li>24시간 접수</li>
                                        <li>고객님의 만족을 위해 성심 성의껏 답변드리겠습니다.</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="clearfix w-75 d-md-none pb-3"/>
                            <div className="col-md-4 mb-md-0 mb-3">
                                <h5 className="text-uppercase">Company</h5>
                                <ul className="list-unstyled">
                                    <li className="company-info">
                                        상호 : 양촌리 민물장어(파주)<span className="bar">I</span>사업자등록번호 : 261-81-23567
                                        <br/>
                                        통신판매업 : 제 2018-서울강남-01646 호<span className="bar">I</span> 개인정보보호책임자 : 지향은
                                        <br/>
                                        주소 : 서울시 도산대로 16길 20, 이래빌딩 B1 ~ 4F<span className="bar">I</span> 대표이사 : 정정애
                                        <br/>
                                        이메일 : <a href="mailto:help@kurlycorp.com"
                                                 className="link">help@kurlycorp.com</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-3 mb-md-0 mb-3">
                                <h5 className="text-uppercase">SiteMap</h5>
                                <ul className="list-unstyled nav-list">
                                    <li><a href="/">HOME</a></li>
                                    <li><a href="/about">양촌리 민물장어 소개</a></li>
                                    <li><a href="/product">제품</a></li>
                                    <li><a href="/login">로그인</a></li>
                                    <li><a href="/signUp">회원가입</a></li>
                                </ul>

                            </div>


                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3">© 2019 Copyright:
                        <a href="https://mdbootstrap.com/education/bootstrap/"> 이동현 |지향은 Company</a>
                    </div>
                </footer>
        );
    }
}
