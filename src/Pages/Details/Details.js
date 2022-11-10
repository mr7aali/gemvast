import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TabTitle } from '../../utility/GenarelFunction';
import Review from '../Review/Review';
import './Details.css'
const Details = () => {
    const service = useLoaderData();
   TabTitle("Gemvast . details")
    const {details,photo,price,title,_id}= service;
    return (
       <div>
         <div className='my-40 details-div max-w-screen-xl	mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='h-full' src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold text-primary">{title}</h2>
                    <p className='text-2xl mt-5'>{details}</p>
                    <div className="card-actions justify-end">
                        <p className='text-3xl text-red-700 font-bold'>Cost: {price} $</p>
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
        <Review 
        id={_id}
        title={title}
        ></Review>
       </div>
    );
};

export default Details;