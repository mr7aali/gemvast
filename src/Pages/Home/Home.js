import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Servicess from './Banner/Servicess/Servicess';
import './Home.css'
const Home = () => {
    const service = useLoaderData();
    
    return (
        <div>
           <Banner></Banner>
           <Servicess
           service ={service}
           ></Servicess>
           <button className="btn btn-outline  btn-primary view-all text-2xl">
            
            
            <Link to={'/services'}>
            View All
            </Link>
            </button>
        </div>
    );
};

export default Home;