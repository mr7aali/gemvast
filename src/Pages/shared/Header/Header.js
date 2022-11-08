import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-200 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/home'>Home</Link>
                    </ul>
                </div>
                <Link to='/' href=' ' >
                    {/* className="btn btn-ghost normal-case text-xl" */}
                    <img className='w-60' src="https://i.ibb.co/DkBJcxX/logo.png" alt="" srcset="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {/* ///////////////// */}
                    <Link to='/home'>Home</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'>  <button className="btn btn-outline  bg-base-200">Login</button></Link>
                <Link to='/register' className='ml-5'>  <button className="btn btn-outline   bg-blue-700 text-white" >Sing UP Now</button></Link>


            </div>
        </div>
    );
};

export default Header;