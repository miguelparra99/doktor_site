import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import { Link }  from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home Style 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home Style 2',
                link: '/home2'
            }
        ]
    },
    {
        id: 11,
        title: 'Department',
        link: '/department',
        submenu: [
            {
                id: 111,
                title: 'Department',
                link: '/department'
            },
            {
                id: 112,
                title: 'Department Single',
                link: '/department-single/Dentisty'
            }
        ]
    },
    {
        id: 21,
        title: 'Services',
        link: '/services',
        submenu: [
            {
                id: 211,
                title: 'Services',
                link: '/services'
            },
            {
                id: 212,
                title: 'Service Single',
                link: '/service-single/Dermatology'
            }
        ]
    },

{
    id: 2,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 21,
                title: 'About',
                link: '/about'
            },
            {
                id: 22,
                title: 'Doctors',
                link: '/team'
            },
            {
                id: 23,
                title: 'Doctor Single',
                link: '/team-single/Dr-Raquel-Riley'
            },
            {
                id: 71,
                title: 'Shop',
                link: '/shop',
            },
            {
                id: 75,
                title: 'Shop Single',
                link: '/product-single/Bp-Machine'
            },
            {
                id: 76,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 77,
                title: 'Wishlist',
                link: '/wishlist'
            },
            {
                id: 78,
                title: 'Checkout',
                link: '/checkout'
            },
            {
                id: 79,
                title: '404 Error',
                link: '/404'
            }
        ]
    },
    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/Using-Flow-Cytometry-in-Protein-Engineering-Detection'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/Using-Flow-Cytometry-in-Protein-Engineering-Detection'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/blog-single-fullwidth/Using-Flow-Cytometry-in-Protein-Engineering-Detection'
            },
        ]
    },
    {
        id: 87,
        title: 'Sucursales',
        link: '/locations',
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }
    
    
]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null}  key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                          <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler}
                                                                    to={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link
                                        to={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;