import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../contexts/AuthProvider';
// import img1 from '../../assets/7000961.jpg'
const SingUp = () => {

    const [user, setUser] = useState({});

    const {createUser,singWithGoogle} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            event.target.reset();
        })
        .catch(err=>console.error(err))

    }
    const GoogleLogIn=()=>{
        singWithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
    }

    const handleInputBlur=event=>{          
            const value = event.target.value;
            const field = event.target.name;
            const newUser= {...user};
            newUser[field]=value;
            setUser(newUser);
           
            
    }
    return (
        <div className="hero bg-base-200  my-20">

            <div className="hero-content flex-col lg:flex-row-reverse">

                {/* <div className='login-img'>
                    <img alt='' src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                </div> */}

                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 login-card">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <h1 className='text-3xl  text-center text-primary-focus font-bold'>Sing Up</h1>


                                <div className='flex w-full'>
                                    <div className='w-1/2'>

                                        <label className="label">
                                            <span className="label-text">Surename</span>
                                        </label>
                                        <input onBlur={handleInputBlur} type="text" name='surename' placeholder="Surename" className="input input-bordered w-11/12	 " />
                                    </div>
                                    <div className='w-1/2'>

                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input onBlur={handleInputBlur} type="text" name='lastname' placeholder="Last Name" className=" input input-bordered w-full" />
                                    </div>
                                </div>





                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={handleInputBlur} type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onBlur={handleInputBlur} type="password" name='password' placeholder="password" className="input input-bordered " required />
                                <label className="label">
                                    <a href=" " className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <h1 className='text-xl'>Do have an account?
                                <Link className=' text-primary font-bold' to={'/login'}> Sign In</Link>
                            </h1>

                            <div className="form-control mt-4">

                                <button  className="btn btn-primary">Sign Up</button>
                            </div>
                            <div className="form-control mt-4 google-singin">
                                    <button onClick={GoogleLogIn} className="btn ">Sign Up With Google</button>
                                </div>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default SingUp;