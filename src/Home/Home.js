import React from 'react';
import AllProduct from '../AllProduct/AllProduct';
import AllReview from '../AllReview/AllReview';
import AboutCompany from './Banner/AboutCompany';
import Banner from './Banner/Banner';
import SecondSection from './Banner/SecondSection/SecondSection';
import ServiceMiddleText from './Banner/ServiceMiddleText';
import ServicesReview from './Banner/ServicesReview/ServicesReview';

import Footer from './Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SecondSection></SecondSection>
            <ServiceMiddleText></ServiceMiddleText>
            <AboutCompany></AboutCompany>
            <ServicesReview></ServicesReview>
            <AllProduct></AllProduct>
            <AllReview></AllReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;