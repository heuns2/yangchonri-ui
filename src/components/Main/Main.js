import React from "react";
import ReactPlayer from 'react-player';
import { Fade } from 'react-slideshow-image';
import './Main.css';
import { FormInput, Card,  CardTitle, CardImg, CardBody,  CardFooter,  Button,  Col, Container,  Row } from "shards-react";
import Link from '@material-ui/core/Link';

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
                <section className="mt40">
                    <Container className="best_card">
                        <div className="bMHkhi ml10 best_list">인기 목록</div>
                        <Row>
                            <Col>
                                <Card style={{ minWidth: "300px" }} href="/product_detail">
                                    <Link href="/product_detail">
                                        <CardImg className="card-img" src={"/images/products/products01.png"} />
                                    </Link>
                                    <Link href="/product_detail">
                                        <CardBody className="title">
                                            <CardTitle>장어탕</CardTitle>
                                            <p>국내산 민물장어로 정성스럽게 끓인.</p>
                                            <h6 className="color-secondary"><b>9,000원</b></h6>
                                        </CardBody>
                                    </Link>
                                    <CardFooter >
                                        <FormInput size="sm" type="number" className="w-30" />
                                        <Button size="sm" theme="light">장바구니</Button>
                                        <Button size="sm" theme="dark">바로구매</Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ minWidth: "300px" }}>
                                    <Link href="/product_detail">
                                        <CardImg className="card-img" src={"/images/products/products02.png"} />
                                    </Link>
                                    <CardBody className="title">
                                        <CardTitle >Lorem Ipsum</CardTitle>
                                        <p>국내산 민물장어로 정성스럽게 끓인.</p>
                                        <h6 className="color-secondary"><b>9,000원</b></h6>
                                    </CardBody>
                                    <CardFooter >
                                        <FormInput size="sm" type="number" className="w-30" />
                                        <Button size="sm" theme="light">장바구니</Button>
                                        <Button size="sm" theme="dark">바로구매</Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ minWidth: "300px" }}>
                                    <Link href="/product_detail">
                                        <CardImg className="card-img" src={"/images/products/products03.png"} />
                                    </Link>
                                    <CardBody className="title">
                                        <CardTitle>Lorem Ipsum</CardTitle>
                                        <p>국내산 민물장어로 정성스럽게 끓인.</p>
                                        <h6 className="color-secondary"><b>9,000원</b></h6>
                                    </CardBody>
                                    <CardFooter >
                                        <FormInput size="sm" type="number" className="w-30" />
                                        <Button size="sm" theme="light">장바구니</Button>
                                        <Button size="sm" theme="dark">바로구매</Button>
                                    </CardFooter>
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
