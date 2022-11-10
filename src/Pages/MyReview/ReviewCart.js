import React from 'react';

const ReviewCart = ({review,handleDelete}) => {
    console.log(review)
    
    return (
        <div className='mb-12 mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{review.serviceName}</h2>
                    <p>{review.review}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleDelete(review)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;