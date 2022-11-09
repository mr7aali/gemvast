import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Card = ({ serv }) => {
    const { title, _id, price, details, photo } = serv;
    return (
        <PhotoProvider>
        <div className='mx-auto singleCard'>
            <div className="card w-96 bg-base-100 shadow-xl">


                
                    <PhotoView src={photo}>
                        <figure><img className='card-photo' src={photo} alt="Shoes" /></figure>
                    </PhotoView>
                




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
                        
                        <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </PhotoProvider>
    );
};

export default Card;