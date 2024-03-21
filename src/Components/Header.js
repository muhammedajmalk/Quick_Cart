import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

function Example() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary  ">
            <Container >

                <Navbar.Brand href="/" className='fw-bold fs-3 text-danger'>Quick_Cart</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-5 my-lg-2  text-center fs-5 "
                        style={{ maxHeight:'250px',}}>
                        <Link to="/" style={{textDecoration:'none', margin:'9px',color:'black',}}>Home</Link>
                        <Link to="/about"style={{textDecoration:'none', margin:'9px',color:'black',}}>About</Link>
                        <Link to="/shop"style={{textDecoration:'none', margin:'9px',color:'black',}}>Shop Watch</Link>
                        <Link to="/contact"style={{textDecoration:'none', margin:'9px',color:'black',}}>Contact</Link>

                        {/* .................... */}
                        <Link to="/cart"style={{textDecoration:'none', margin:'7px'}}>
                            <div >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    // fill="currentColor"
                                    // class="bi bi-cart-check-fill"    
                                    viewBox="0 0 16 16">
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 
                                7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 
                                0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 
                                .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 
                                0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 
                                0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 
                                1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 
                                8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                                <Badge className='bg-danger'>0</Badge>
                            </div>
                        </Link>
                        {/* ..................... */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Example;