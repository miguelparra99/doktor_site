import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/hero2/hero2';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import TeamSection from '../../components/TeamSection/TeamSection';
import FunFactSection from '../../components/FunFactSection/FunFactSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import AppoinmentSec2 from '../../components/AppoinmentSec2/AppoinmentSec2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'



const HomePage = () => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <Hero2 />
            <About />
            <ServiceSection dClass={'wpo-department-section-s2'}/>
            <WhyChoose />
            <TeamSection tClass={'wpo-team-section-s2'}/>
            <FunFactSection/>
            <AppoinmentSec2 />
            <Testimonial />
            <BlogSection blClass={'wpo-blog-section-s2'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;