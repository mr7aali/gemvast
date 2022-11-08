import React from 'react';
import './Banner.css'
import img1 from '../../../assets/bann1.jpg'
import img2 from '../../../assets/bann2.jpg'
import img3 from '../../../assets/bann3.jpg'
const Banner = () => {
    return (
        <div  className=' rounded-lg'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full relative">

                <div className='w-full img-gradient h-4/5 rounded-lg'>
                        <img alt=' ' src={img1} className="w-full" />
                 </div>
                    <div className='absolute top-1/4 left-24'>
                        <h1 className='text-6xl text-white font-bold '>Healthy Body <br /> Fresh Mind</h1>
                        <p className='text-white'>World is committed to making participation in the event harass ment free on experience for</p>
                    </div>

                </div>
                <div id="item2" className="carousel-item w-full relative">

                <div className='w-full img-gradient h-4/5'>
                        <img alt=' ' src={img2} className="w-full" />
                 </div>
                    <div className='absolute top-1/4 left-24'>
                        <h1 className='text-6xl text-white font-bold '>Healthy Body <br /> Fresh Mind</h1>
                        <p className='text-white'>World is committed to making participation in the event harass ment free on experience for</p>
                    </div>

                </div>
                <div id="item3" className="carousel-item w-full relative">

                <div className='w-full img-gradient h-4/5'>
                        <img alt=' ' src={img3} className="w-full" />
                 </div>
                    <div className='absolute top-1/4 left-24'>
                        <h1 className='text-6xl text-white font-bold '>Healthy Body <br /> Fresh Mind</h1>
                        <p className='text-white'>World is committed to making participation in the event harass ment free on experience for</p>
                    </div>

                </div>


            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;