import React from "react";
import "./Header.css";
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
                    <a className="nav-brand" style={logo} href="index.html"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="views/about.html" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="views/foods.html" className="nav-link">Foods</a></li>
                            <li className="nav-item"><a href="views/lifestyle.html" className="nav-link">Lifestyle</a>
                            </li>
                            <li className="nav-item"><a href="views/contact.html" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;