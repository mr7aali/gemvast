import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Home/Card/Card';
import './AllServices.css'
const AllServices = () => {
    const service = useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div>
                <h1 className='text-5xl font-bold m-20 text-center'>All  Service <span className='text-red-700'>Category</span></h1>
            </div>
            <div className='allServices-container'>
        {
            service.map(serv=><Card
            key={serv._id}
            serv={serv}
            ></Card>)
        }
            </div>
        </div>
    );
};

export default AllServices;