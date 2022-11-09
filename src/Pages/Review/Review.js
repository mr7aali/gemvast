import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import './Review.css'
const Review = () => {

    const { user } = useContext(AuthContext);
    console.log(user)
    const handletextarea = event => {
        event.preventDefault();
        console.log(event.target.review.value)
    }
    return (
        <div>

{
    user?.uid ?
 <div className='max-w-screen-xl	mx-auto text-4xl font-bold text-center'>
                <h1>Please click login for Review</h1>
            </div>
}


           

            <div className='max-w-screen-xl	mx-auto review-container'>

                <div>
                    <div>
                        <h1 className='text-5xl text-center font-bold ' ><span className='text-red-600'>Review</span> This Service</h1>
                    </div>

                    <form onSubmit={handletextarea}>
                        <div className='text-center mt-16   '>
                            <textarea name='review' className="textarea textarea-secondary w-4/5 text-2xl " placeholder="Typ for the review..."></textarea>

                        </div>
                        <div className='text-center '>
                            <button type='submit' className="btn btn-outline w-1/4">Submit</button>
                        </div>

                    </form>

                </div>


            </div>
        </div>
    );
};

export default Review;