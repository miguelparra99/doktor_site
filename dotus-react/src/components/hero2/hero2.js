import React from "react";
import { Link } from 'react-router-dom'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import hero1 from '../../images/slider/slide-3.jpg'
import hero2 from '../../images/slider/slide-1.jpg'
import hero3 from '../../images/slider/slide-2.jpg'

const Hero2 = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (


        <section className="wpo-hero-slider">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        speed={1800}
                        parallax={true}
                        navigation
                    >
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="container">
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2>We have Fantastic Doctors and Dentist</h2>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                ultrices gravida.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btn"><Link onClick={ClickHandler} to="/appoinment" className="theme-btn">Online Appoinment</Link></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                <div className="container">
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2>We have Fantastic Doctors and Dentist</h2>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                ultrices gravida.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btn"><Link onClick={ClickHandler} to="/appoinment" className="theme-btn">Online Appoinment</Link></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                                <div className="container">
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2>We have Fantastic Doctors and Dentist</h2>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                ultrices gravida.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btn"><Link onClick={ClickHandler} to="/appoinment" className="theme-btn">Online Appoinment</Link></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Hero2;