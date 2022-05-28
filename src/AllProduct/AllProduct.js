import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProduct = () => {
    const [products, setProducts] = useState([])

    fetch('https://peaceful-sea-40105.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    console.log(products);




    return (

        <div>
            <h1 className='text-center text-4xl my-10 text-primary'>ALL PRODUCTS</h1>
            <div className="grid  lg:grid-cols-3 grid-cols-1 justify-center items-center gap-2 my-10">
                {
                    products.slice(0, 3).map(product => {
                        console.log(product._id);
                        return <div class="card w-96 bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10">
                                <img src={product.img} alt="" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">{product.name}</h2>
                                <p>{product.description}</p>
                                <p>price:{product.price}$</p>
                                <p>Quantity{product.quantity}</p>

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

export default AllProduct;