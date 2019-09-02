import React from 'react';
import './About.css';
import "assets/css/Bootstrap-grid.css";

class About extends React.Component {

    componentDidMount() {
        this.renderMap();
    }

    renderMap = () => {
        this.loadScript("//dapi.kakao.com/v2/maps/sdk.js?appkey=135426590942b64691be51d5ec6a8d4a");
        window.initMap = this.initMap;
    };


    loadScript = (url) => {
        const index = window.document.getElementsByTagName("script")[0];
        const script = window.document.createElement("script");
        script.src = url;
        script.async = true;
        script.defer = true;
        index.parentNode.insertBefore(script, index);
    };


    initMap = () => {
        console.log("11111");
        let el = document.getElementById('map');
        let map = new window.kakao.maps.Map(el, {
            center : new window.kakao.maps.Lating(33.450701, 126.570667)
        });

    };

    render(){
        return (
            <main>
                <section>
                    <div style={{backgroundImage: `url('/images/samples/intro_main_v2.png')`}} className="about-top"></div>
                </section>

                <section>
                    <div className="container">
                        <div className="">
                            <div className="pl-md-5 py-5">
                                <div className="row justify-content-start pb-3">
                                    <div className="col-md-12 heading-section ftco-animate">
                                        <h3 className="text-left mb-4"><span>양촌리 민물장어 소개</span></h3>
                                        <p>저희 양촌리 민물 장어는, 양식장 직영으로써 엄선 된 원재료를 바탕으로 맛을 낸 고품격 장어탕입니다.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center py-5 bg-light mb-4">
                                            <div className="text">
                                                <strong className="number">첫번째,</strong>
                                                <strong className="number" ><span>두툼하고 살살 녹는 부드러운 맛!</span></strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center py-5 bg-light mb-4">
                                            <div className="text">
                                                <strong className="number">두번째,</strong>
                                                <strong className="number" ><span>부담 없는 가격!</span></strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center py-5 bg-light mb-4">
                                            <div className="text">
                                                <strong className="number">세번째,</strong>
                                                <strong className="number" ><span>내몸의 든든한 보양식!</span></strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center py-5 bg-light mb-4">
                                            <div className="text">
                                                <strong className="number">네번째</strong>
                                                <strong className="number" ><span>신선한 재료, 고품격 맛!</span></strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <div className="container">
                        <div className="">
                            <div className="">
                                <div className="py-5 px-4">
                                    <h3 className="text-left mb-5">찾아 오시는 길</h3>
                                    <p className="mb-md-5">
                                        <strong>주소:  </strong>경기도 파주시 야당동 920, 야당 교회 앞 <br />
                                        <strong>연락처:</strong> 031-943-0377 <br />
                                        <strong>영업시간: </strong> 10:00 ~ 23:00
                                    </p>
                                </div>
                                <div className="App">
                                    <h1>Google Maps in React App</h1>
                                    <div id="map"></div>
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