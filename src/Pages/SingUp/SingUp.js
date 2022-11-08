import React from 'react';
import { Link } from 'react-router-dom';
// import img1 from '../../assets/7000961.jpg'
const SingUp = () => {
    return (
        <div className="hero  my-20">

            <div className="hero-content flex-col lg:flex-row-reverse">

            {/* <div className='login-img'>
                    <img alt='' src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                </div> */}

                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 login-card">
                    <div className="card-body">
                        <div className="form-control">
                            <h1 className='text-3xl  text-center text-primary-focus font-bold'>Sing Up</h1>


                            <div className='flex w-full'>
                                <div className='w-1/2'>

                                    <label className="label">
                                        <span className="label-text">Surename</span>
                                    </label>
                                    <input type="text" placeholder="Surename" className="input input-bordered w-11/12	 " />
                                </div>
                                <div className='w-1/2'>

                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="Last Name" className=" input input-bordered w-full" />
                                </div>
                            </div>





                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href=" " className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <h1 className='text-xl'>Do have an account?
                            <Link className=' text-primary font-bold' to={'/login'}> Sign In</Link>
                        </h1>

                        <div className="form-control mt-4">

                            <button className="btn btn-primary">Sing Up</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SingUp;