import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const service = useLoaderData();
    console.log(service)
    return (
        <div>
            <h1>this is details page</h1>
        </div>
    );
};

export default Details;