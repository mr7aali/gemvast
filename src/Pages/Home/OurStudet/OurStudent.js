import React from 'react';
import './OurStudent.css'
const OurStudent = () => {
    return (
        <div className=' full-student-container mb-10  '>
            <div className=' max-w-screen-xl mx-auto'>
                <div className='mb-16'>
                    <h1 className='text-center text-5xl text-primary pb -10  font-bold'>Successful <span className='text-red-700'>Students</span></h1>
                </div>
                <div className='student-container'>
                    <div className='student bg-base-300'>

                        <div className='img-div '>
                            <img src="https://i.ibb.co/JKRVcNk/trainer-details1.png" alt="" />
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold text-center'>Sheikh Aali</h1>
                            <p className='text-xl text-center  font-bold'>Fitness Instructor</p>
                        </div>
                    </div>

                    <div className='student bg-base-300'>
                        <div className='img-div'>
                            <img src="https://i.ibb.co/W3jY8mL/trainer-details-6.png" alt="" />
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold text-center'>Sumaiya Islam</h1>
                            <p className='text-xl text-center  font-bold'>Ashtanga Yoga</p>
                        </div>
                    </div>


                    <div className='student bg-base-300'>
                        <div className='img-div'>
                            <img src="https://i.ibb.co/Jxf1tkZ/trainer-details-2.png" alt="" />
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold text-center'>Vt Shaffr</h1>
                            <p className='text-xl text-center font-bold'>Bodybuilder</p>
                        </div>
                    </div>

                    <div className='student bg-base-300'>
                        <div className='img-div'>
                            <img src="https://i.ibb.co/0chKNtZ/trainer-details-5.png" alt="" />
                        </div>
                        <div >
                            <h1 className='text-3xl font-bold text-center'>Ak Willams</h1>
                            <p className='text-xl text-center 	 font-bold'>Cardio & Conditirning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStudent;