import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css';
import watch_one from '../../Assets/Product 01.jpeg'
import { RiDeleteBin6Fill } from "react-icons/ri";

function Cart() {
    return (
        <div className='mt-5 text-center'>
            <div className='container cart_page'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-12'>
                        <table>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Remove</th>
                            </tr>
                            <tr >
                                <td>
                                    <div className='cart-info '>
                                        <img className='img-fluid mt-3' src={watch_one} alt='' />
                                        <div>
                                            <h4 className='fw-bold mt-5'>T-Shirts</h4>
                                            <p className=''> Price : $ 50.00 </p>
                                        </div>
                                    </div>
                                </td>
                                <td className='fw-normal'><input type='number' value={1}></input></td>
                                <td className='fw-normal'> $ 50.00</td>
                                <td>
                                    <Link to="" className='fw-bold w-50 text-danger'><RiDeleteBin6Fill /></Link>

                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <hr />
                <div className='row'>
                <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
                    <button className='btn btn-outline-secondary rounded-0'> Continue Shopping</button>

                </div>
                <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
                    <button className='btn btn-primary rounded-0'> Check Out</button>

                </div>

            </div>
            
            </div>


            {/* <p>Your shopping cart is empty.</p> */}

        </div>
    )
}

export default Cart
