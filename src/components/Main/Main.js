import React from "react";
// import Background1 from 'assets/images/bg_1.jpg';
// import Background2 from 'assets/images/bg_2.jpg';

class Main extends React.Component {
    render(){
        // const bg1 = {
        //     backgroundImage: `url(${Background1})`
        // };
        // const bg2 = {
        //     backgroundImage: `url(${Background2}`
        // };

        return (
            <section className="home-slider owl-carousel">
                <div className="slider-item">
                    <div className="container">
                        <div className="row d-flex slider-text justify-content-center align-items-center" data-scrollax-parent="true">

                            <div className="img"></div>
                            <div className="text d-flex align-items-center ftco-animate">
                                <div className="text-2 pb-lg-5 mb-lg-4 px-4 px-md-5">
                                    <h3 className="subheading mb-3">Featured Posts</h3>
                                    <h1 className="mb-5">Love the Delicious &amp; Tasty Foods</h1>
                                    <p className="mb-md-5">A small river named Duden flows by their place and supplies
                                        it with the necessary regelialia</p>
                                    <p><a href="#" className="btn btn-black px-3 px-md-4 py-3">Read More
                                        <span className="icon-arrow_forward ml-lg-4"></span></a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="slider-item">
                    <div className="container">
                        <div className="row d-flex slider-text justify-content-center align-items-center"
                             data-scrollax-parent="true">

                            <div className="img"></div>

                            <div className="text d-flex align-items-center ftco-animate">
                                <div className="text-2 pb-lg-5 mb-lg-4 px-4 px-md-5">
                                    <h3 className="subheading mb-3">Featured Posts</h3>
                                    <h1 className="mb-5">I am A Blogger &amp; I Love Foods</h1>
                                    <p className="mb-md-5">A small river named Duden flows by their place and supplies
                                        it with the necessary regelialia</p>
                                    <p><a href="#" className="btn btn-black px-3 px-md-4 py-3">Read More
                                        <span className="icon-arrow_forward ml-lg-4"></span></a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default Main;