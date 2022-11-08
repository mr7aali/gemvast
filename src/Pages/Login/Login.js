import React, { useContext } from 'react';

import './Login.css'
// import img1 from '../../assets/7000961.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
const Login = () => {

    const { logIn,singWithGoogle } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error=>console.error(error));
    }
    const GoogleLogIn=()=>{
        singWithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
    }

    return (
        <div>

            <div className="hero  my-20 ">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    {/* <div className='login-img'>
                        <img alt='' src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    </div> */}

                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 login-card">

                        <form onSubmit={handleSubmit}>


                            <div className="card-body">
                                <div className="form-control">
                                    <h1 className='text-3xl  text-center text-primary-focus font-bold'>login</h1>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href=" " className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <h1 className='text-lg '>Don't have an account yet?
                                    <Link className=' text-primary font-bold' to={'/singup'}> Sign Up Now</Link>
                                </h1>

                               <div className="form-control mt-4">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                                
                               <div className="form-control mt-4 google-singin">
                                    <button onClick={GoogleLogIn} className="btn ">Login With Google</button>
                                </div>
                                
                            </div>

                        </form>

                    </div>


                </div>
            </div>
        </div>

    );
};

export default Login;