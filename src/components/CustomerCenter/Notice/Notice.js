import React from "react";
import { ListGroup, ListGroupItemHeading, ListGroupItem, Container, Row, Col  } from "shards-react";
import Customer from 'components/CustomerCenter/Customer';
import styled from 'styled-components';
import oc from 'open-color';
import './Notice.css';


export default class Notice extends React.Component {
    render(){
        return (
            <Container className="mt20 mb20">
                <Row>
                    <Col sm="12" lg="3"><Customer/></Col>
                    <Col sm="12" lg="9">
                    <ListGroup>
                        <ListGroupItemHeading>공지사항</ListGroupItemHeading>
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Morbi leo risus</ListGroupItem>
                        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}