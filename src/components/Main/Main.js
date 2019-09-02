import React from "react";
import ReactPlayer from 'react-player';
import { Fade } from 'react-slideshow-image';
import './Main.css';
import {
    Card,
    CardTitle,
    CardImg,
    CardBody,
    Button,
    Col,
    Container,
    Row
} from "shards-react";


const topSlideImages = [
    '/images/bg_1.jpg',
    '/images/bg_2.jpg',
    '/images/bg_3.jpg'
];


const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true
};

export default class Main extends React.Component {

    render(){
        return (
            <main>
                <section>
                    <div className="slide-container">
                        <Fade {...fadeProperties}>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={topSlideImages[0]} />
                                </div>
                            </div>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={topSlideImages[1]} />
                                </div>
                            </div>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={topSlideImages[2]} />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>
                <section>
                    <Container className="mt40">
                        <Row>
                            <Col>
                                <Card style={{ minWidth: "300px" }}>
                                    <CardImg className="card-img" src={"/images/products/products01.png"} />
                                    <CardBody>
                                        <CardTitle>Lorem Ipsum</CardTitle>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                        <Button>Read more &rarr;</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ minWidth: "300px" }}>
                                    <CardImg className="card-img" src="/images/products/products02.png" />
                                    <CardBody>
                                        <CardTitle>Lorem Ipsum</CardTitle>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                        <Button>Read more &rarr;</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ minWidth: "300px" }}>
                                    <CardImg className="card-img" src="/images/products/products03.png" />
                                    <CardBody>
                                        <CardTitle>Lorem Ipsum</CardTitle>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                        <Button>Read more &rarr;</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <div className="video-wrapper mt40">
                        <ReactPlayer
                            playsInline
                            ref='player'
                            url='https://www.youtube.com/watch?v=iByCYgR9aE8'
                            playing
                            width={900}
                            height={500}
                        />
                    </div>
                </section>
                <section>
                    <Container className="mt40 mb40">
                        <Row>
                            <Col>
                                <div className="banner-image">
                                    <img src="/images/samples/pc_img_1557384929.png" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        );
    }
}
