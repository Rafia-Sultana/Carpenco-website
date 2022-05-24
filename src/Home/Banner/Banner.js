import React from 'react';
import worker from '../../assets/blue-whitecollar-worker-gesture-formal-wear-outerwear-removebg-preview.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={worker} class="max-w-sm rounded-lg " alt='' />
                <div>
                    <h6 class="font-bold">Best Carpentars Company!</h6>
                    <h1 className='text-5xl text-primary font-bold'>Professional & Quality</h1>
                    <h1 className='text-5xl text-primary font-bold'> Carpenter service</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;