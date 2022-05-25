import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const AddItem = () => {
    const [user] = useAuthState(auth);
    const submitButtonHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const img = e.target.image.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;


        const data = { name, price, img, quantity, description }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => alert('successfully data added'))

        e.target.reset();
        console.log(data);

    }


    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content w-[350px]  flex-col lg:flex-row-reverse">

                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        {/* <div class="form-control">
                            <label class="label">
                                <span class="label-text"></span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div> */}
                        <form onSubmit={submitButtonHandler} class="form-control">

                            <input type="text" placeholder='image url' class="input input-bordered" name='image' required /> <br />
                            <input type="text" placeholder='name' class="input input-bordered" name='name' required /><br />
                            <input type="number" placeholder='price' class="input input-bordered" name='price' required /><br />
                            <input type="number" placeholder='quantity' class="input input-bordered" name='quantity' required /><br />
                            <input type="text" placeholder='description' class="input input-bordered" name='description' required />
                            {/*        <div class="form-control mt-6">
                            <button>Add Item</button>
                        </div> */}
                            <input class="btn btn-primary" type="submit" value="Add Item" />
                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;