import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import './Review.css'
const Review = ({ id,title }) => {

    const { user } = useContext(AuthContext);
    const [reviw, setReviw] = useState({});


    // console.log(user);
    // const {displayName,email,photoURL}=user;

    //console.log(displayName,email,photoURL)

    const handletextarea = event => {
        event.preventDefault();
        console.log(reviw);
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviw)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset();
                
            })
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;

        const newUser = { ...reviw };
        newUser[field] = value;
        newUser['name'] = user?.displayName;
        newUser['email'] = user?.email;
        newUser['photo'] = user?.photoURL;
        newUser['reviewID'] = id;
        newUser['serviceName']=title;

        setReviw(newUser);


    }
    return (
        <div>
            {
                user?.uid ?
                    <div className='max-w-screen-xl	mx-auto review-container'>

                        <div>
                            <div>
                                <h1 className='text-5xl text-center font-bold ' ><span className='text-red-600'>Review</span> This Service</h1>
                            </div>

                            <form onSubmit={handletextarea}>
                                <div className='text-center mt-16 imgandtextarea  '>
                                    <div className='reviwer-img'>
                                        <img src={user?.photoURL} alt="" />
                                    </div>
                                    <textarea onBlur={handleInputBlur} name='review' className="textarea textarea-primary text-2xl " placeholder="Typ for the review..."></textarea>

                                </div>
                                <div className='text-center mt-10'>
                                    <button type='submit' className="btn btn-outline w-1/4">Submit</button>
                                </div>

                            </form>

                        </div>


                    </div>




                    :

                    <div className='max-w-screen-xl	mx-auto text-5xl font-bold text-center mb-20'>
                        <h1>Please <Link className='text-primary text-4xl underline	' to="/login">Click</Link> login for Review</h1>

                    </div>
            }





        </div>
    );
};

export default Review;