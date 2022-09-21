import React from 'react';
import { NavLink } from 'react-router-dom';

const NAVLINK_L = [
    { content: "BATHROOM", link: "/sub01" },
    { content: "PRODUCT", link: "/sub02" },
    { content: "LOOKBOOK", link: "/sub03" },
]


const NAVLINK_R = [
    { content: "LOGIN", link: "/sub04" },
    { content: "JOIN", link: "/sub05" },
    { content: "MYPAGE", link: "/sub06" },
    { content: "CART", link: "/sub07" },
]

const Header = () => {
    return (
        <header className='Header'>
            <i className="xi-bars"></i>
            <div className="container">
                <div className="smenu">
                    <ul>
                        {
                            NAVLINK_L.map((it, idx) => {
                                return (
                                    <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                                )
                            })
                        }
                    </ul>
                    <h1>
                        <a href="/">
                            <img src={process.env.PUBLIC_URL+ '/assets/images/logo_b.png'} alt="" />
                        </a>
                    </h1>
                    <ul>
                        {
                            NAVLINK_R.map((it, idx) => {
                                return (
                                    <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                                )
                            })
                        }
                    </ul>                                    
                </div>
            </div>
            <i className="xi-profile"></i>
        </header>
    )
}

export default Header;