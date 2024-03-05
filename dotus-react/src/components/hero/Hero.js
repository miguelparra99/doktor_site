import React from "react";
import { Link } from 'react-router-dom'
import { JackInTheBox, Slide } from "react-awesome-reveal";
import shape from '../../images/slider/line-1.png'
import fondo from '../../images/backcomega.jpg'

const Hero = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const whiteSectionStyle = {
        height: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60%',
        zIndex: -1,
        clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0% 100%)',
        backgroundImage: `url(${fondo})`,
        backgroundSize: '80% 80%',
        backgroundPosition: '110% 99%',
    };



    return (
        <section className="static-hero" id='div'>
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-8 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="slide-sub-title">
                                        <Slide direction="up" duration="1000" triggerOnce={true}>
                                            <h2>Un slogan médico aquí.</h2>
                                        </Slide>
                                    </div>
                                    <div className="slide-text">
                                        <Slide direction="up" duration="1500" triggerOnce={true}>
                                            <ul>
                                                <li>Cotiza tus consultas médicas.</li>
                                                <li>Visualiza tus exámenes médicos.</li>
                                                <li>Agenda citas con nuestros expertos.</li>
                                            </ul>
                                        </Slide>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="slide-btn">
                                        <Slide direction="up" duration="1600" triggerOnce={true}>
                                            <Link onClick={ClickHandler} className="theme-btn" to="/appoinment">Agenda Ahora</Link>
                                        </Slide>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nueva sección blanca con línea diagonal */}
            <div style={whiteSectionStyle}></div>

            <div className="shape-1">
                <svg width="696" height="839" viewBox="0 0 696 839" fill="none">
                    <g opacity="0.6" filter="url(#filter0_f_221_39)">
                        <circle cx="162" cy="305" r="234" />
                    </g>
                    <defs>
                        <filter id="filter0_f_221_39" x="-372" y="-229" width="1068" height="1068"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_221_39" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="line-shape-1">
                <img src={shape} alt="" />
            </div>
        </section>
    )
}

export default Hero;
