import React from 'react'
import './Footer.css';
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { LiaFacebookF } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

function Footer() {
  return (
    <div className='bg-dark mt-5 p-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-3 col-md-3 '>
            <IoLocationOutline />
            <div>
              <h5 className=' text-warning'>Address</h5>
              <p className='text-white'>
                Kanjirampara House <br />
                Pookottumanna p.o <br />
                Kattichira_Chungathara<br />
                Kerala_India_679334<br />
              </p>
            </div>
          </div>

          <div className='col-12 col-sm-3 col-md-3 bg-dark'>
            <IoLocationOutline />
            <div>
              <h5 className='text-warning'>Reservations</h5>
              <p className='text-white'>
                <strong>Phone:</strong> +91 9747 380 130<br />
                <strong>Email:</strong> ajmalkattichira543@gmail.com<br />
              </p>
            </div>
          </div>

          <div className='col-12 col-sm-3 col-md-3 bg-dark'>
            <IoLocationOutline />
            <div>
              <h5 className='text-warning'>Opening Hours</h5>
              <p className='text-white'>
                <strong> Mon-Sat: 10AM</strong> - 10PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className='col-12 col-sm-3 col-md-3 bg-dark'>
            <IoLocationOutline />
            <div>
              <h5 className='text-warning'>Follow Us</h5>
              <div class="social-links d-flex text-white">
                <a href="#" className="twitter p-1"><FaXTwitter /></a>
                <a href="https://www.facebook.com/ajmal.muthu.796" className="facebook p-1"><LiaFacebookF /></a>
                <a href="https://www.instagram.com/ajmal__kattichira/?hl=en" className="instagram p-1"><FaInstagram /></a>
                <a href="https://www.linkedin.com/feed/" className="linkedin p-1"><ImLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
        <div className='text-white m-5'>
          <hr />
        </div>
      </div>

      <div className="container">
        <div className="copyright text-white text-center">
          &copy; Copyright <strong><span> Quick_Cart </span></strong>. All Rights Reserved
        </div>
        <div className="credits text-white text-center">
          Designed by <a href="https://google.com/ "> ajmal_kattichira</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
