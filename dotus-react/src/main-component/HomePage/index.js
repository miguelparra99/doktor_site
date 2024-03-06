import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/Hero';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import AppoinmentSec from '../../components/AppoinmentSec/AppoinmentSec';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'



const HomePage = () => {

    return (
        <Fragment>
            <Navbar />
            <Hero />
            <ServiceSection />
            <Testimonial />
            <BlogSection />
            <AppoinmentSec />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;