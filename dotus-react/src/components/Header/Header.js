import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../images/logo.svg'

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (

        <header id="header" className={props.topbarNone}>
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/"><img src={Logo}alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/home">Home Style 1</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home2">Home Style 2</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Department</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/department">Department</Link></li>
                                                <li><Link onClick={ClickHandler} to="/department-single/Dentisty">Department Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Services</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/services">Services</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/Dermatology">Service Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                                <li><Link onClick={ClickHandler} to="/team">Doctors</Link></li>
                                                <li><Link onClick={ClickHandler} to="/team-single/Dr-Raquel-Riley">Doctor Single</Link></li>
                                                <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} to="/product-single/Bp-Machine">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} to="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} to="/wishlist">Wishlist</Link></li>
                                                <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                                                <li><Link onClick={ClickHandler} to="/404">404 Error</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/blog">Blog Right Sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog Left Sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog Fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} to="/">Blog Details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/blog-single/Using-Flow-Cytometry-in-Protein-Engineering-Detection">Blog Details Right Sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/Using-Flow-Cytometry-in-Protein-Engineering-Detection">Blog Details Left
                                                            Sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/Using-Flow-Cytometry-in-Protein-Engineering-Detection">Blog Details
                                                            Fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" to="/appoinment">COTIZAR</Link>
                                    </div>
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi flaticon-loupe"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;