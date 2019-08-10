import React from "react";
import { Container, Row, Col } from "shards-react";
import ReactPlayer from 'react-player'

export default class Main extends React.Component {
    render(){
        return (
            <Container className="dr-example-container">
                <Row>
                    <Col lg={{ size: 8, order: 2, offset: 2 }}>
                        <div>
                            <ReactPlayer url='https://www.youtube.com/watch?v=iByCYgR9aE8' playing />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
