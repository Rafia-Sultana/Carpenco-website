import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Myorder = () => {
    const [myorder, setMyorder] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/order/${email}`)
            .then(res => res.json())
            .then(data => setMyorder(data))
    }, [])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            myorder.map((product, index) => {
                                return <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.inputQuantity}</td>

                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorder;