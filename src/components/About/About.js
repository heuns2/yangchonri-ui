import React from "react";
import './About.css';
import "assets/css/Bootstrap-grid.css";


const aboutImages = [
    '/images/about_main.jpg',
    '/images/about_introduce.jpg',
 ];
 

 
    
class About extends React.Component {
    render(){
        let about_top = { 
            backgroundColor:'aqua', 
          }; 
        return (
            <main>
                <section class="hero-wrap hero-wrap-2" style={{
                    backgroundImage: `url(${aboutImages[0]})`
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


                <section class="ftco-counter ftco-section ftco-no-pt ftco-no-pb img" id="section-counter">
                    <div class="container">
                        <div class="row d-flex">
                            <div class="col-md-6 d-flex">
                                <div class="img d-flex align-self-stretch" style={{
                    backgroundImage: `url(${aboutImages[1]})`
                    }}></div>
                            </div>
                            <div class="col-md-6 pl-md-5 py-5">
                                <div class="row justify-content-start pb-3">
                            <div class="col-md-12 heading-section ftco-animate">
                                <h2 class="mb-4"><span>About 양촌리 민물 장어</span></h2>
                                <p>저희 양촌리 민물 장어는, 양식장 직영으로써 엄선 된 원재료를 바탕으로 맛을 낸 고품격 장어탕입니다.</p>
                            </div>
                            </div>
                                <div class="row">
                            <div class="col-md-6 justify-content-center counter-wrap ftco-animate">
                                <div class="block-18 text-center py-5 bg-light mb-4">
                                <div class="text">
                                    <strong class="number">첫번째,</strong>
                                    <strong class="number" ><span>두툼하고 살살 녹는 부드러운 맛!</span></strong>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-6 justify-content-center counter-wrap ftco-animate">
                                <div class="block-18 text-center py-5 bg-light mb-4">
                                <div class="text">
                                    <strong class="number">두번째,</strong>
                                    <strong class="number" ><span>부담 없는 가격!</span></strong>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-6 justify-content-center counter-wrap ftco-animate">
                                <div class="block-18 text-center py-5 bg-light mb-4">
                                <div class="text">
                                    <strong class="number">세번째,</strong>
                                    <strong class="number" ><span>내몸의 든든한 보양식!</span></strong>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-6 justify-content-center counter-wrap ftco-animate">
                                <div class="block-18 text-center py-5 bg-light mb-4">
                                <div class="text">
                                    <strong class="number">네번째</strong>
                                    <strong class="number" ><span>신선한 재료, 고품격 맛!</span></strong>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                
                <section class="ftco-section ftco-no-pt ftco-section-about ftco-no-pb bg-darken">
                    <div class="container-fluid">
                        <div class="row">
                                <div class="col-sm-6 col-md-6 col-lg-9 order-md-last img py-5"></div>

                        <div class="col-sm-6 col-md-6 col-lg-3 py-4 text d-flex align-items-center ftco-animate">
                            <div class="text-2 py-5 px-4">
                            <h2 class="mb-5">양촌리 민물장어 <br /> 찾아 오시는 길</h2>
                            <p class="mb-md-5">주소: 경기도 파주시 야당동 920, 야당 교회 앞 <br /> 연락처: 031-943-0377 <br /> 영업시간: 10:00 ~ 23:00</p>
                        </div>
                        </div>
                        </div>
                    </div>
                </section>
          </main>
        );
    }

}

export default About;