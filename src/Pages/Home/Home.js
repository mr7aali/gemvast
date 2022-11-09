import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Servicess from './Banner/Servicess/Servicess';
import './Home.css'
import JoinUs from './JoinSection/JoinUs';
import OurStudent from './OurStudet/OurStudent';
const Home = () => {
    const service = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center text-5xl pt-10 mb-0 text-primary font-bold'>Most Popular <span className='text-red-600'>Services</span></h1>
            <Servicess
                service={service}
            ></Servicess>
            <button className="btn btn-outline  btn-primary view-all text-2xl">


                <Link to={'/services'}>
                    View All
                </Link>
            </button>
            <JoinUs></JoinUs>
            <OurStudent></OurStudent>
        </div>
    );
};

export default Home;