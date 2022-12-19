import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const EditReveiw = () => {
  const review = useLoaderData();
  const navigate = useNavigate();
  const {user}=useContext(AuthContext);

    const handletextarea = event => {
        review.review= event.target.review.value;
      

        event.preventDefault();
        fetch(`http://localhost:5000/myreviews/edit/${review._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
           navigate(`/myreviews/${user?.email}`)
           toast('Review Updated')
        })

    }

   // http://localhost:3000mdsukkur9057@gmail.com

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div>
                <div>
                    <h1 className='text-5xl text-center font-bold ' >Please  Update <span className='text-red-600'> {review.serviceName}</span> </h1>
                </div>

                <form onSubmit={handletextarea}>
                    <div className='text-center mt-16 imgandtextarea  '>

                        <textarea name='review' defaultValue={review.review} className="textarea textarea-primary text-2xl " placeholder="Typ for the review..."></textarea>

                    </div>
                    <div className='text-center mt-10'>
                        <button type='submit' className="btn btn-outline w-1/4 mb-20">Submit</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default EditReveiw;