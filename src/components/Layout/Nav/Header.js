import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./Header.css";
import LOGO from "assets/images/logo3.png";

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavLink,
    Collapse,
} from "shards-react";


export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.state = {
            dropdownOpen: false
        };
    }

    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
                dropdownOpen: !this.state.dropdownOpen
            }
        });
    }


    render(){
        const logo = {
            backgroundImage: `url(${LOGO})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 220,
            width: 250,
            height: 65
        };

        return (
            <Navbar type="light" theme="" expand="md">
                <NavbarBrand href="/" style={logo}></NavbarBrand>
                <Collapse navbar>
                    <Nav navbar className="nav-bolder">
                        <NavItem><NavLink active href="/">HOME</NavLink></NavItem>
                        <NavItem><NavLink active href="/about">소개</NavLink></NavItem>
                        <NavItem><NavLink active href="/product">상품</NavLink></NavItem>
                    </Nav>

                    <Nav navbar className="ml-auto">
                        <Dropdown  open={this.state.dropdownOpen} toggle={this.toggleDropdown} >
                            <DropdownToggle nav caret>고객센터</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>공지사항</DropdownItem>
                                <DropdownItem>자주하는 질문</DropdownItem>
                                <DropdownItem>1:1 문의</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem><NavLink active href="/login">로그인</NavLink></NavItem>
                        <NavItem><NavLink active href="/signUp">회원가입</NavLink></NavItem>

                    </Nav>
                </Collapse>
            </Navbar>

        );
    }
}
