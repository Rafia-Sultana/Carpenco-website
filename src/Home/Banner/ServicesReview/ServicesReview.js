import React from 'react';
import './ServicesReview.css';
import { AiFillCar } from 'react-icons/ai';
import { AiFillWechat } from 'react-icons/ai';
import { SiWebmoney } from 'react-icons/si';
import { FaKey } from 'react-icons/fa';

const ServicesReview = () => {
    return (
        <div className='flex flex-wrap'>
            <div className="third-section">
                <div className="right-part">
                    <AiFillCar size={35}></AiFillCar>
                    <br />
                    <h4 className='mt-3'>ALL BRANDS</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem acantium doloremque laudantium.</p>
                </div>
                <div className="right-part">
                    <AiFillWechat size={40} ></AiFillWechat>
                    <h4 className='mt-3'>FREE SUPPORT</h4>
                    <p>We also offer 24/7 Customer Service so you can contact us anytime you error sit voluptatem acantium</p>
                </div>
                <div className="right-part">
                    <FaKey size={30}></FaKey>
                    <h4 className='mt-3'>DEALERSHIP</h4>
                    <p>The best car dealership WordPress Theme website ut perspiciatis unde omnis iste natus sit voluptatem</p>
                </div>
                <div className="right-part">
                    <SiWebmoney size={30}></SiWebmoney>
                    <h4 className='mt-3'>AFFORDABLE</h4>
                    <p>We offer best price Perspiciatis sed ut unde omnis iste natus error sit voluptatem acantiu munde omnis.</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesReview;