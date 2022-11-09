import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ serv}) => {
    const {title,_id,price,details,photo} = serv; 
    return (
        <div className='mx-auto singleCard'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='card-photo' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>

                        {
                            details.length > 100 ?
                            <p>{details.slice(0, 90) + "..."} <Link className='text-primary' >Read More</Link></p>
                            :
                            <p>{details}</p>
                        }
                    
                    </p>
                    <div className="card-actions justify-end">
                        <p className='text-xl mt-2 font-bold'> Cost {price}$</p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;