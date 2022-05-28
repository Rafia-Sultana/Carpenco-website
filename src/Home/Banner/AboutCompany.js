import React from 'react';
import tools from '../../assets/getty_494605768_2000133320009280151_316966 (2).jpg'
import sign from '../../assets/Capture-removebg-preview.png'
const AboutCompany = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={tools} alt="" class="max-w-sm rounded-lg shadow-2xl" />
                <div className='m-10'>
                    <p className='text-primary'>About Carpenco..</p>
                    <h1 className='text-4xl'>We deal with the aspects of professionals <span className='text-primary italic'>Tools Services</span></h1>
                    <p class="py-6">We listen. We advise. We design, together. Happy customers and ongoing relationships are what we strive for. Success is measured by results, the most important being how our clients  are what we strive for. Success is measured by results, the most important being how our clients feel about their experience with us</p>
                    <br />
                    <div className="flex justify-end">
                        <img src={sign} alt="" />
                        <div className=" mt-10">
                            <h5 className='text-2xl'>James-Mohan</h5>
                            <p>Chairman and Founder of Carpenco.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;