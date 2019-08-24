import React from "react";
import ReactPlayer from 'react-player';
import { Fade } from 'react-slideshow-image';
import './Main.css';
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button,
    Col,
    Container,
    Row
} from "shards-react";


const slideImages = [
   '/images/bg_1.jpg',
    '/images/bg_2.jpg',
    '/images/bg_3.jpg'
];

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
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
                                    <img src={slideImages[0]} />
                                </div>
                            </div>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={slideImages[1]} />
                                </div>
                            </div>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={slideImages[2]} />
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
                                    <CardFooter>Card footer</CardFooter>
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
                                    <CardFooter>Card footer</CardFooter>
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
                                    <CardFooter>Card footer</CardFooter>
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
            </main>
        );
    }
}
