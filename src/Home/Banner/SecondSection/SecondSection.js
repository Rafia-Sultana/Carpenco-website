import React from 'react';
import './SecondSection.css'
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { MdReviews } from 'react-icons/md';
import { BsTools } from 'react-icons/bs';
import { GiGiftOfKnowledge } from 'react-icons/gi';

const SecondSection = () => {
    return (
        <div className='flex flex-wrap justify-center gap-4 '>
            <div class="card w-48 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="card-actions justify-center">
                        <MdOutlinePeopleAlt size={30}></MdOutlinePeopleAlt>
                    </div>
                    {/* <h2 class="card-title">Card title!</h2> */}
                    <p className='text-center'>50k+customer</p>

                </div>
            </div>
            <div class="card w-48 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="card-actions justify-center">
                        <MdReviews size={30}></MdReviews>
                    </div>
                    {/* <h2 class="card-title">Card title!</h2> */}
                    <p className='text-center'>45k+reviews</p>

                </div>
            </div>
            <div class="card w-48 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="card-actions justify-center">
                        <GiGiftOfKnowledge size={30}></GiGiftOfKnowledge>
                    </div>
                    {/* <h2 class="card-title">Card title!</h2> */}
                    <p className='text-center'>120M+Annual Revenue</p>

                </div>
            </div>
            <div class="card w-48 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="card-actions justify-center">
                        <BsTools size={30}></BsTools>
                    </div>
                    {/* <h2 class="card-title">Card title!</h2> */}
                    <p className='text-center'>60+tools</p>

                </div>
            </div>
        </div>
    );
};

export default SecondSection;