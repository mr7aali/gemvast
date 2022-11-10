import React, { useState } from 'react';
import {  toast } from 'react-toastify';
const Addservices = () => {
    const [service, setService] = useState({});

    const handleSubmit = event => {
        event.preventDefault();
      
        console.log(service)
        
        fetch('https://gemvast-server.vercel.app/addservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset();
                toast('done');
            })


    }

    const handleInputBlur = event => {

        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...service };
        newUser[field] = value;
        setService(newUser)

    }


    return (
        <div className="hero h-full max-w-screen-xl mx-auto mb-20">
            <div className=" w-1/2">

                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit}>
                        <div className="card-body">





                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-3xl">Service Name</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name='title' placeholder="Service Name" className=" text-xl input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-3xl">imgURL</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name='photo' placeholder="Service's picture" className=" text-xl input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-3xl">Price</span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name='price' placeholder="how much cost it is?" className=" text-xl input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-3xl">Details </span>
                                </label>
                                <input onBlur={handleInputBlur} type="text" name='details' placeholder="Write more about your details" className=" text-xl input input-bordered" />
                            </div>





                            <div className="form-control mt-6">
                                <button  className="btn btn-primary ">Create Service</button>
                            </div>
                        </div>

                    </form>

                </div>



            </div>
        </div>
    );
};

export default Addservices;