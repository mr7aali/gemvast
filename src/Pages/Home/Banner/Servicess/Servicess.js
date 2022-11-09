import React from 'react';
import Card from '../../Card/Card';
import './Servicess.css'

const Servicess = ({service}) => {
  
    
  
    return (
       <div className='services-container max-w-screen-xl	mx-auto	'>
        {
             service.map(serv=><Card 
             key={serv._id}
             serv={serv}
             ></Card>)
        }
       </div>
    );
};

export default Servicess;