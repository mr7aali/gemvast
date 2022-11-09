import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Review.css'
const Review = () => {
   
    const { user } = useContext(AuthContext);
    const [reviw, setReviw] = useState({});
    
    console.log(reviw)
   // console.log(user);
    // const {displayName,email,photoURL}=user;
        
        //console.log(displayName,email,photoURL)
     
    const handletextarea = event => {
        event.preventDefault();
       
    }
    
    const handleInputBlur=event=>{          
        const value = event.target.value;
        const field = event.target.name;
       
        const newUser= {...reviw};
        newUser[field]=value;
        newUser['name']=user?.displayName;
        newUser['email']=user?.email;
        newUser['photo']=user?.photoURL;
        
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
                                <div className='text-center mt-16   '>
                                    <textarea onBlur={handleInputBlur} name='review' className="textarea textarea-secondary w-4/5 text-2xl " placeholder="Typ for the review..."></textarea>

                                </div>
                                <div className='text-center '>
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