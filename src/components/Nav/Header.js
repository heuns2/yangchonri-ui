import React from "react";
import { Link } from "react-router-dom";
import LOGO from "assets/images/logo3.png";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
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
        );
    }
}
