import React from "react";
import "../Header/Header.css";

const Header = ({ black }) => {
    return (
        <header className={black == true ? "black" : ""}>
            <div className="header--logo">
                <a href="">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                        alt="Netflix"
                    />
                </a>
            </div>
            <div className="header--user">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="avatar" />
                </a>
            </div>
        </header>
    );
};

export default Header;
