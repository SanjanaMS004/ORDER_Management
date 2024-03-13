import React, { useEffect, useState } from 'react'
import Orderservive from '../service/Orderservive';
import { Link } from 'react-router-dom';

const Home = () => {
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        Orderservive.getALLOrders().then((res) => {
            console.log(res.data);
            setOrderList(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                <a class="navbar-brand" href="#">Order Management System</a>
            </nav>
            <div class="container mt-3">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header fs-3 text-center">
                                Orders List
                            </div>

                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">prodId</th>
                                            <th scope="col">prodName</th>
                                            <th scope="col">price</th>
                                            <th scope="col">quantity</th>
                                            <th scope="col">customerName</th>
                                            <th scope="col">number</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            orderList.map((o, num) => (
                                                <tr>
                                                    <td>{num+1}</td>
                                                     <td>{o.prodName}</td>
                                                    <td>{o.price}</td>
                                                    <td>{o.quantity}</td>
                                                    <td>{o.customerName}</td>
                                                    <td>{o.number}</td>
                                                    
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home