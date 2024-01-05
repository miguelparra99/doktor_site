import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}


const Footer = (props) => {
    return (
        <footer className={`wpo-site-footer ${props.footerClass}`}>
            <div className="f-shape-1">
                <svg width="887" height="757" viewBox="0 0 887 757" fill="none">
                    <g opacity="0.6" filter="url(#filter0_f_235_142)">
                        <circle cx="353" cy="223" r="234" />
                    </g>
                    <defs>
                        <filter id="filter0_f_235_142" x="-181" y="-311" width="1068" height="1068"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_235_142" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="f-shape-2">
                <svg width="696" height="606" viewBox="0 0 696 606" fill="none">
                    <g opacity="0.6" filter="url(#filter0_f_235_143)">
                        <circle cx="534" cy="534" r="234" />
                    </g>
                    <defs>
                        <filter id="filter0_f_235_143" x="0" y="0" width="1068" height="1068"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_235_143" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="blog" />
                                </div>
                                <p>For the most part, text messaging should be considered safe and effective.
                                    There are many ways that texting can improve communication.
                                </p>
                                <div className="social-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="fa fa-skype" aria-hidden="true"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Company</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">Newsroom </Link></li>
                                    <li><Link onClick={ClickHandler} to="/services">Services</Link></li>
                                    <li><Link onClick={ClickHandler} to="/department">Department</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-contact-widget">
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-placeholder"></i>7 Green Lake Street Crawfordsville,
                                            IN 47933
                                        </li>
                                        <li><i className="fi flaticon-phone-call"></i>+1 800 123 456 789</li>
                                        <li><i className="fi flaticon-email"></i>Dotus@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>You will be notified when somthing new will be appear.</p>
                                <form onSubmit={SubmitHandler}>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Email Address *" required />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit"><i className="ti-email"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">Copyright &copy;<span>2023</span>
                                <span className="copyright-icon">|</span> All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;