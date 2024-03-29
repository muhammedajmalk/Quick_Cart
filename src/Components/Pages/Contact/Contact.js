import React from 'react'
import './Contact.css'


function Contact() {
  return (
    <div>
      <section id="contact" className="contact mt-5">
        <div className="container">
          <div className="section-title" data-aos="zoom-out">
            <h2 className='text-center mt-5' >Contact</h2><hr />
            {/* <p >Contact Us</p> */}
          </div>

          <div className="row mt-5">
            <div className="col-lg-4" data-aos="fade-right">
              <div className="info">
                <div className="address">
                  <i className=""></i>
                  <h4>Location:</h4>
                  <p>Chungathara, Kattichira,Kerala, India</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>ajmalkattichira543@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 9747 380 130</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">
              <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
    </div>
  )
}

export default Contact
