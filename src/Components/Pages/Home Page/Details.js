import React from 'react'
import { useParams } from 'react-router-dom'
import { IoIosStar } from "react-icons/io";
import Button from "react-bootstrap/Button";


function Details() {
  let params = useParams()
  const id = params.id
  console.log(id);
  return (
    <div className='container mt-5'>
      {/* <hr /> */}
      <div className='row'>
        <div className='col-12 col-sm-6 col-md-6'>

          <img
            className="text-center"
            src="https://watch-shopping-demo.zohocommerce.com/product-images/700x700-06.jpg/2516776000000078029/400x400"
          />

        </div>
        <div className='col-12 col-sm-6 col-md-6'>
          <h3 className=' mt-5'>RS.300/-</h3>
          <div className=' text-success mt-3'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <h > 1 Review</h>
          </div>
          <p>Use this paragraph to describe your product.<br>
          </br>Add information that your users may find interesting.</p>
          <div className=' mt-4'>
            <Button className='cart-button' variant="outline-success rounded-0 ">Add to Cart</Button>
          </div>
          {/* <p className='mt-3 text-center'> Use this paragraph to describe your product. <br />Add information that your users may find interesting</p> */}

        </div>
      </div>
    </div>
  )
}

export default Details
