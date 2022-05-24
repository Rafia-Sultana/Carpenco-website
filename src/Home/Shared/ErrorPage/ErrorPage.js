import React from 'react';
import './ErrorPage.css';
import errorpage from '../../../assets/errorpage.jpg'

const ErrorPage = () => {
    return (
        <div className='h-screen flex items-center justify-center'>


            <img src={errorpage} class="max-w-sm rounded-lg " alt='' />
            <p className='text-red-500'>This page is unavailable..</p>



        </div>
    );
};

export default ErrorPage;