import React from 'react'
import './About.css'
import about from '../../Assets/shoap Page.jpeg'
import smart_watch from '../../Assets/smartwatch-.jpg'

function About() {
  return (
    <div className=''>
      <div className='Baground'>
        <h6 className='text-center fw-light mt-4'>About_Page /-</h6>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-6 col-md-6 col-lg-6 text-center mt-4'>
            <img className='img-fluid' src={smart_watch} alt='' />

          </div>
          <div className='col-12 col-sm-6 col-md-6 col-lg-6 mt-4 p-5'>
            <h1 >Quick_Cart</h1>
            <h6 className='fw-light'>Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book </h6>


          </div>


        </div>
      </div>
    </div>
  )
}

export default About
