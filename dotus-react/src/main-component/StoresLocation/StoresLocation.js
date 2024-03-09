import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import LocationsSection from '../../components/LocationsSection/LocationsSection';



const StoresLocation =() => {
    return(
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Sucursales'} pagesub={'Clínicas'}/> 
            <LocationsSection />
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};

export default StoresLocation;