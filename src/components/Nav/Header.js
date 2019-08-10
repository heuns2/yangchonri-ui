import React from "react";
import LOGO from "assets/images/logo3.png";
import "./Header.css";

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse, Container, Row, Col
} from "shards-react";


export default class Header extends React.Component {
    render(){
        const logo = {
            backgroundImage: `url(${LOGO})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 121,
            width: 150,
            height: 35
        };

        return (
            <Container className="dr-example-container">
                <Row>
                    <Col lag={{ size: 8, order: 2, offset: 2 }}>
                        <Navbar type="light" className="center" expand="md">
                            <NavbarBrand href="/" style={logo}></NavbarBrand>
                            <Collapse navbar>
                                <Nav navbar className="ml-auto">
                                    <NavItem><NavLink active href="/">HOME</NavLink></NavItem>
                                    <NavItem><NavLink active href="/about">소개</NavLink></NavItem>
                                    <NavItem><NavLink active href="/product">상품</NavLink></NavItem>
                                    <NavItem><NavLink active href="/login">로그인</NavLink></NavItem>
                                    <NavItem><NavLink active href="/myPage">마이페이지</NavLink></NavItem>
                                </Nav>

                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>

        );
    }
}
