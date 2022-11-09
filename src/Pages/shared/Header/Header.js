import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user, LogOut } = useContext(AuthContext);
    return (
        <div className='bg-base-200 mb-10'>
            <div className="navbar  bg- base-200 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {/* //////////////////////////////////////////////////////////////////// */}
                            <Link className='m-5 text-base' to='/home'>HOME</Link>
                            <Link className='m-5 text-base' to='/services'>SERVICES</Link>
                            <Link className='m-5 text-base' to='/blog'>BLOG</Link>
                            <Link className='m-5 text-base' to='/contact'>CONTACT</Link>
                        </ul>
                    </div>
                    <Link to='/' href=' ' >
                        {/* className="btn btn-ghost normal-case text-xl" */}
                        <img className='w-60 rounded-lg' src="https://i.ibb.co/DkBJcxX/logo.png" alt="" srcset="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {/* ///////////////// */}
                        <Link className='m-5 text-2xl' to='/'>HOME</Link>
                        <Link className='m-5 text-2xl' to='/services'>SERVICES</Link>
                        <Link className='m-5 text-2xl' to='/blog'>BLOG</Link>
                        <Link className='m-5 text-2xl' to='/contact'>CONTACT</Link>

                    </ul>
                </div>
                <div className="navbar-end">

                    {user?.uid ?
                        <Link onClick={LogOut} to='/login'>  <button className="btn btn-outline  bg-base-200">Log Out</button></Link>
                        :
                        <>
                            <Link to='/login'>  <button className="btn btn-outline  bg-base-200">Login</button></Link>
                            <Link to='/singup' className='ml-5'>  <button className="btn btn-outline   bg-blue-700 text-white" >Sing UP Now</button></Link>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;