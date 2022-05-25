import React from 'react';
import AllProduct from '../AllProduct/AllProduct';
import Banner from './Banner/Banner';
import SecondSection from './Banner/SecondSection/SecondSection';
import ServicesReview from './Banner/ServicesReview/ServicesReview';

import Footer from './Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SecondSection></SecondSection>
            <ServicesReview></ServicesReview>
            <AllProduct></AllProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;