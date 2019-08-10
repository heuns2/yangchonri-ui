import React from "react";
import ReactPlayer from 'react-player';
import { Fade } from 'react-slideshow-image';
import './Main.css';


const slideImages = [
   '/images/bg_1.jpg',
    '/images/bg_2.jpg',
    '/images/bg_3.jpg'
];

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
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
                    <div className="video-wrapper">
                        <ReactPlayer
                            playsInline
                            ref='player'
                            url='https://www.youtube.com/watch?v=iByCYgR9aE8'
                            playing
                            fluid={false}
                            width={900}
                            height={500}
                        />
                    </div>
                </section>
                <section>
                    <div className="slide-container">
                        <Fade {...fadeProperties}>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={slideImages[0]} />
                                </div>
                                <h2>First Slide</h2>
                            </div>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={slideImages[1]} />
                                </div>
                                <h2>Second Slide</h2>
                            </div>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={slideImages[2]} />
                                </div>
                                <h2>Third Slide</h2>
                            </div>
                        </Fade>
                    </div>
                </section>
            </main>
        );
    }
}
