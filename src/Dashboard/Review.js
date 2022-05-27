import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSubmit = (e) => {
        e.preventDefault();

        const review = e.target.review.value;
        const name = user.displayName;
        const email = user.email;
        const rating = e.target.rating.value;
        if (rating > 5 || rating < 1) {
            toast.error('rating  cant greater than 5 or less than 1');
        }
        else {
            const data = {
                review, name, email, rating
            }
            fetch('http://localhost:5000/review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(res => res.json())
                .then(data => alert('successfully data added'))
        }
        e.target.reset();
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content w-[350px]  flex-col lg:flex-row-reverse">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleSubmit} class="form-control">


                                <input type="text" placeholder='name' disabled value={user?.displayName || ''} class="input input-bordered" name='name' required /><br />
                                <input type="email" placeholder='email' disabled value={user?.email || ''} class="input input-bordered" name='email' required /><br />
                                <input type="text" placeholder='write your opinions here...' class="input input-bordered" name='review' required /><br />
                                <input type="number" placeholder='rating' class="input input-bordered" name='rating' required /><br />

                                <input class="btn btn-primary" type="submit" value="Submit" />
                            </form>



                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Review;