import React from 'react';

import './Login.css'
import img1 from '../../assets/7000961.jpg'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="hero  my-20">
            
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className='login-img'>
                    <img alt='' src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                </div>

                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 login-card">
                    <div className="card-body">
                        <div className="form-control">
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
                        <h1 className='text-lg'>Don't have an account yet? 
                    <Link className=' text-primary font-bold' to={'/singup'}> Sing Up Now</Link>
                    </h1>
                    
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default Login;