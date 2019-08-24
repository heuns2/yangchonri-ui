import React from "react";
import './About.css';
import "assets/css/Bootstrap-grid.css";
import ABOUT_MAIN from "assets/images/about_main.jpg";

class About extends React.Component {
    render(){
        return (
            <section class="hero-wrap hero-wrap-2" style={{
                backgroundImage: `url(${ABOUT_MAIN})`
                }}>
            <div class="overlay"></div>
            <div class="container">
              <div class="row no-gutters slider-text align-items-end justify-content-center">
                <div class="col-md-9  pb-5 text-center">
                  <h1 class="mb-3 bread">양촌리 민물 장어 소개</h1>
                  <p class="breadcrumbs"><span class="mr-2"><a href="/">Home <i class="ion-ios-arrow-forward"></i></a></span>
                  <span>소개<i class="ion-ios-arrow-forward"></i></span></p>
                </div>
              </div>
            </div>
          </section>
        );
    }

}

export default About;