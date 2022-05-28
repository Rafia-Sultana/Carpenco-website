import React from 'react';
import { useEffect, useState } from 'react';
const AllOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-sea-40105.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>productName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => {
                                return <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.productName}</td>
                                    <td>{order.email}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.inputQuantity}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrder;