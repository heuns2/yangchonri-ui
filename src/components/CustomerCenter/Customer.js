import React from "react";
import { Nav,NavItem, NavLink } from "shards-react";
import styled from 'styled-components';

import './Customer.css';

const ContainerWrap = styled.div`
    border: 1px solid #C7CED5;
`;

export default class Customer extends React.Component {
    render(){
        return (
            <div>
                <h3 className="notice_header">고객센터</h3>
                <ContainerWrap>
                    <Nav vertical className="customer_nav">
                        <NavItem>
                            <NavLink active href="/notice">공지사항</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">자주하는 질문</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">1:1 문의</NavLink>
                        </NavItem>
                    </Nav>
                </ContainerWrap>   
            </div>
        )
    }
}
