import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [product, setProduct] = useState([])

    fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    return (
        <div>
            <h1 className='text-center text-4xl my-10 text-primary'>All Products Page</h1>
            <div className="grid  lg:grid-cols-3 grid-cols-1 justify-center items-center gap-2 my-10">
                {
                    product.map(singleProduct => {
                        return <div class="card w-96 bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10">
                                <img src={singleProduct.img} alt="" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">{singleProduct.name}</h2>
                                <p>{singleProduct.description}</p>
                                <p>price:{singleProduct.price}$</p>
                                <p>Quantity{singleProduct.quantity}</p>

                                <div class="card-actions">
                                    <Link to={`/purchase/${product._id}`} class="btn btn-primary">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    })
                }


            </div>
        </div>
    );
};

export default Products;