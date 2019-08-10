import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import LOGO from "assets/images/logo3.png";

class Header extends React.Component {
    render(){
        const logo = {
            backgroundImage: `url(${LOGO})`,
            backgroundSize: 150,
            width: 306,
        };
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <li style={logo}><Link to="/"></Link></li>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><Link to="/">Home</Link></li>
                            <li className="nav-item"><Link to="/about">소개</Link></li>
                            <li className="nav-item"><Link to="/product">상품</Link></li>

                            <li className="nav-item"><Link to="/login">로그인</Link></li>
                            <li className="nav-item"><Link to="/mypage">마이페이지</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;