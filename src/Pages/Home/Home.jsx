// import React from 'react';

import Banner from "./Banner";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import TopSellingSection from "./TopSellingSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSellingSection></TopSellingSection>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;