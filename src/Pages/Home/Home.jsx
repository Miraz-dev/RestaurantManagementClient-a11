// import React from 'react';

import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import TopSellingSection from "./TopSellingSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Foodopedia</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            
            <Banner></Banner>
            <TopSellingSection></TopSellingSection>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;