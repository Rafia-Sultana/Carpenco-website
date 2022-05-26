import React, { useState } from 'react';

const AllReview = () => {
    const [reviews, setReviews] = useState([])

    fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    console.log(reviews);

    return (
        <div>
            <h1 className='text-center text-4xl my-10 text-primary'>ALL Reviews</h1>
            <div className="grid  lg:grid-cols-3 grid-cols-1 justify-center items-center gap-2 my-10">
                {
                    reviews.slice(0, 3).map(review => {
                        return <div class="card w-96 bg-base-100 shadow-xl">
                            {/* <figure class="px-10 pt-10">
                                <img src={product.img} alt="" class="rounded-xl" />
                            </figure> */}
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">{review.name}</h2>
                                <p>{review.review}</p>
                            </div>
                        </div>
                    })
                }


            </div>
        </div>
    );
};

export default AllReview;