import React from 'react';
import './JoinUs.css'
const JoinUs = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-5xl pb-10 text-primary font-bold'>Why You Will <span className='text-red-600'> Join </span></h1>
                <p className='text-3xl text-center pb-10'>World is committed to making participation in the event a harassment <br /> free experience for everyone, regardless of level of experience</p>
            </div>
            <div className='JoinMeCard mb-32'>
                <div>
                    <h1 className='text-3xl mt-3 font-bold'>Good for health</h1>
                    <p className='text-xl mt-5'>We’re stating the obvious with this one but did you know that being active daily reduces the risk of heart disease, strokes and type 2 diabetes? </p>
                </div>
                <div>
                    <h1 className='text-3xl mt-3 font-bold'>Good For Mind</h1>
                    <p className='text-xl mt-5'>When you exercise, endorphins are released which can calm anxiety and lift your mood.</p>
                </div>
                <div>
                    <h1 className='text-3xl mt-3 font-bold'>Access to equipment</h1>
                    <p className='text-xl mt-5'>Being a member of a gym means you have access to tons of equipment, allowing you to keep your routine fresh and exciting.</p>
                </div>
                <div>
                    <h1 className='text-3xl mt-3 font-bold'>Access to knowledge</h1>
                    <p className='text-xl mt-5'>If you’re a workout newbie, a gym membership can give you the tools and knowledge to start out. Learn the ropes by booking on the induction programme</p>
                 

                </div>
            </div>
        </div>
    );
};

export default JoinUs;