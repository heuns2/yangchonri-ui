import React from "react";
import { Breadcrumb, BreadcrumbItem } from "shards-react";
import './Product.css';

class Product extends React.Component {
    render(){
        return (
            <main>
                <section>
                    <div>
                        <Breadcrumb className="text-right">
                            <BreadcrumbItem>
                                <a href="#">Home</a>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>공지사항</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div style={{backgroundImage: `url('/images/samples/intro_main_v2.png')`}} className="about-top"></div>
                </section>
                <section className="ftco-section mt40 mb40">
                    <div className="container">
                        <div className="bMHkhi"> 상품 목록</div>
                        <div className="row">
                            <div className="">
                                <div className="row">
                                    <div className="col-md-6 col-lg-12">
                                        <div className="blog-entry d-lg-flex">
                                            <div className="w-40">
                                                <a href="#" className="img d-flex align-items-end" style={{backgroundImage: `url('/images/products/products01.png')`}} >
                                                    <div className="overlay"></div>
                                                </a>
                                            </div>
                                            <div className="text px-md-4 px-lg-5 w-60 pt-3">
                                                <h2><a href="/product_detail">Tasty &amp; Delicious Foods</a></h2>
                                                <p>A small river named Duden flows by their place and supplies
                                                    it with the necessary regelialia. It is a paradisematic
                                                    country, in which roasted parts of sentences fly into your
                                                    mouth.
                                                </p>
                                                <div className="tagWrap">
                                                    <span className="tag"><a>#장어</a></span>
                                                    <span className="tag"><a>#양촌리</a></span>
                                                    <span className="tag"><a>#민물장어</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-12">
                                        <div className="blog-entry d-lg-flex">
                                            <div className="w-40">
                                                <a href="/product_detail" className="img d-flex align-items-end" style={{backgroundImage: `url('/images/products/products02.png')`}} >
                                                    <div className="overlay"></div>
                                                </a>
                                            </div>
                                            <div className="text px-md-4 px-lg-5 w-60 pt-3">
                                                <h2><a href="#">Tasty &amp; Delicious Foods</a></h2>
                                                <p>A small river named Duden flows by their place and supplies
                                                    it with the necessary regelialia. It is a paradisematic
                                                    country, in which roasted parts of sentences fly into your
                                                    mouth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-12">
                                        <div className="blog-entry d-lg-flex">
                                            <div className="w-40">
                                                <a href="/product_detail" className="img d-flex align-items-end" style={{backgroundImage: `url('/images/products/products03.png')`}} >
                                                    <div className="overlay"></div>
                                                </a>
                                            </div>
                                            <div className="text px-md-4 px-lg-5 w-60 pt-3">
                                                <h2><a href="#">Tasty &amp; Delicious Foods</a></h2>
                                                <p>A small river named Duden flows by their place and supplies
                                                    it with the necessary regelialia. It is a paradisematic
                                                    country, in which roasted parts of sentences fly into your
                                                    mouth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <div className="block-27">
                                    <ul>
                                        <li><a href="#">&lt;</a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">&gt;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

}

export default Product;