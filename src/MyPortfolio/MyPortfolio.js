import React from 'react';
import profile from '../../src/assets/rafia.jpg';

const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={profile} alt="" class="max-w-sm  rounded-lg shadow-2xl" />
                <div>
                    <h3 class="text-5xl font-bold">About Myself</h3>
                    <p class=" font-bold text-xl">Rafia Sultana</p>
                    <p class="">Email-Address: rafiasultana0097@gmail.com</p>
                    <p class="">SSC/HSC background: Tongi Pilot School Girls School and Girls College</p>
                    <p class="font-semibold">Skills I have..</p>
                    <p>Lnaguages:
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>BOOTSTRAP</li>
                        <li>Tailwind</li>
                        <li>JavaScript</li>
                        <li>ReactJs</li></p>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;