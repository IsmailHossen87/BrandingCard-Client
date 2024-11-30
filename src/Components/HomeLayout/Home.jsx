import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Service from '../Service/Service';
import BrandCards from '../BrandCards/BrandCards';

const Home = () => {
    return (
        <div className='space-y-5'>
            <Banner></Banner>
            <BrandCards></BrandCards>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;