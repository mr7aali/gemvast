import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ReviewCart from './ReviewCart';
import './MyReview.css'
import { TabTitle } from '../../utility/GenarelFunction';
import { toast } from 'react-toastify';
const MyReview = () => {

   
    TabTitle("Gemvast . Reviews")
    const Review = useLoaderData();
    const [displayReview, setDIsplayReview] = useState(Review)

    const handleDelete = (review) => {
      
        const agree = window.confirm("Are You Sure To Delete Review?");
        if (agree) {
            fetch(`http://localhost:5000/myreviews/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert("Delete Successfully");
                        const remaing = displayReview?.filter(rev => rev._id !== review._id)
                        setDIsplayReview(remaing)
                        toast('Successfully deleted');


                    }
                }
                )
        }
    }

 

    return (
        <div className='max-w-screen-xl mx-auto mb-60'>
            {
                displayReview?.length ?

                    <div className='max-w-screen-xl mx-auto'>
                        <h2 className='text-center text-5xl font-bold mb-10'>Your All <span className='text-red-700'>Reviews</span></h2>
                        <div className='reviewCart-container'>
                            {
                                displayReview?.map(rev => <ReviewCart
                                    key={rev._id}
                                    review={rev}
                                    handleDelete={handleDelete}
                                ></ReviewCart>)
                            }
                        </div>
                    </div>
                    :
                    <div>
                        <h1 className='text-center text-5xl font-bold pt-48 pb-72'>You didn't add any <span className='text-red-600'>Review</span> yet!</h1>
                    </div>
            }

        </div>
    );
};

export default MyReview;