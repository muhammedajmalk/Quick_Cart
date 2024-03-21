import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { Data } from "./Data";
import Sample_Product from "./Sample_Product";
import MainWatch from "../../Assets/Main_Watch.png";
// import Logo from "../../Assets/Logo (1).png";

function Home() {
  console.log(Data);
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 mt-5 home_bar" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
          {/* <img src={Logo} alt='' /> */}
          <h6 className="fw-light">Quick_Cart</h6>
          <h1 className="main title fw-bold">Live Inspired</h1>
          <h5 className="fw-light">
            Our watches are an expression of your taste. <br />
            Let them inspire you to be the best version of yourself.
          </h5>
          <div>
            <Button className="mt-3" variant="outline-success">
              Shop Now
            </Button>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 mt-5 img-fluid">
          <img className="main_img" src={MainWatch} alt="main_img" />
        </div>
      </div>
      {/* ............... 3 Cards.........................  */}
      <div className="mt-5">
        <div className="row p-3">
          <div className="col-12 col-sm-12 col-md-4 ">
            <img
              className="img-fluid"
              src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-18.png"
              alt=""
            />
          </div>
          <div className="col-12 col-sm-12 col-md-4 ">
            <img
              className="img-fluid"
              src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-17.png"
              alt=""
            />
          </div>
          <div className="col-12 col-sm-12 col-md-4">
            <img
              className="img-fluid"
              src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-16.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* ...............All Products........................................... */}
      <div className="mt-5">
        <h1 className="">Products...</h1>
        <div className="mt-5">
          <Sample_Product />
        </div>
      </div>

      {/* ....................Banner.................................. */}
      <div className="mt-5">
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6"></div>
            </div>
          </div>
        </section>
      </div>

      {/* .................Best Selling..................... */}
      <div className="mt-5">
        <h1 className="text-dark ">Bestselling Watches</h1>
        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-3">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Rado_Watch</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Rs.300.00
                </Card.Subtitle>
                <img
                  className="card_img img-fluid"
                  src="https://watch-shopping-demo.zohocommerce.com/product-images/700x700-06.jpg/2516776000000078029/400x400"
                />
                <Card.Link href="#"></Card.Link>
                <Card.Link href="#"></Card.Link>

                <button type="button" className="Quick_View"
                >Quick View </button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-12 col-md-3">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Rado_Watch</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Rs.300.00
                </Card.Subtitle>
                <img
                  className="card_img"
                  src="https://watch-shopping-demo.zohocommerce.com/product-images/700x700-04.jpg/2516776000000078019/400x400"
                />
                <Card.Link href="#"></Card.Link>
                <Card.Link href="#"></Card.Link>
                <button type="button" className="Quick_View"
                >Quick View </button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-sm-12 col-md-6">
            <img
              className="img-fluid"
              src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-15.jpg"
            />
          </div>
        </div>
      </div>
      {/* ................Sign_Up..................................... */}
      <div className="mt-5 bg-light">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 m-auto">
            <img
              className="best "
              src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-23.jpg"
            />
          </div>
          <div className="col-12 col-sm-8 col-md-8">
            <div className="mt-5 ">
              <h4 className="text-center text-danger">
                SIGN UP FOR THE LATEST NEWS & OFFERS
              </h4>

              {/* ------------Form--------------------- */}
              <form action="/action_page.php">
                <div className="mb-3 mt-3">
                  <label for="email" className="form-label">
                    Email :
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="pwd" className="form-label">
                    Password :
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="pswd"
                  />
                </div>
                <div class="form-check mb-3">
                  <label className="form-check-label"> Remember me </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="remember"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              
              {/* ............Form End.................. */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
