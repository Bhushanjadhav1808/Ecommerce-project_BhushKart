import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdHome } from "react-icons/md";
import { FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import { TiPrinter } from "react-icons/ti";

import { faTwitter, faFacebook, faInstagram, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaLinkedin } from 'react-icons/fa6';

// Bootstrap Footer component with social media icons

const Footer = () => {

    return (

        <footer className="bg-dark py-4">
   <Container className='text-center text-md-start mt-5'>
                <Row>

                    <Col>
                        <div style={{ textAlign: 'center' }}>

                            {/* Social media icons */}

                            <span ><a href='https://twitter.com/i/flow/login'style={{ color: 'skyblue', fontSize: '30px' }}><FontAwesomeIcon icon={faTwitter} className="mx-2" /></a></span>
                            <span ><a href='https://www.instagram.com/' style={{ color: 'red', fontSize: '30px' }}><FontAwesomeIcon icon={faInstagram} className="mx-2" /></a></span>
                            <span ><a href='https://www.facebook.com/' style={{ color: 'blue', fontSize: '30px' }}><FontAwesomeIcon icon={faFacebook} className="mx-2" /></a></span>


                            <span ><a href='https://www.youtube.com/' style={{ color: 'red', fontSize: '30px' }}><FontAwesomeIcon icon={faYoutube} className="mx-2" /></a></span>
                            <span ><a href='#' style={{ color: 'skyblue', fontSize: '30px' }}><FontAwesomeIcon icon={faLinkedin} className="mx-2" /></a></span>

                            <span ><a href='https://github.com/Bhushanjadhav1808' style={{ color: 'green', fontSize: '30px' }}><FontAwesomeIcon icon={faGithub} className="mx-2" /></a></span>
                        </div>

                    </Col>

                </Row>
            </Container>
            <hr style={{ color: '#fff' }}/>

            <Container >

                <Row className='mt-3'>
                    <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#fff' }}>

                            Company name:"BHUSHKART"
                        </h6>
                        <p style={{ color: '#fff' }}>
                            Companies like Meesho and Snapdeal, as well as big names like BhushKart, Amazon, Flipkart and Indiamart,
                            are making a big impact on India's online shopping market. Even though it's still growing,
                            ecommerce in India is
                            already giving people lots of choices for shopping, fast delivery, and easy ways to pay.
                        </p>
                    </Col>

                    <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#fff' }}>
                            PRODUCTS
                        </h6>
                        <p style={{ color: '#fff' }}>
                            Mens
                        </p>
                        <p style={{ color: '#fff' }}>
                            Womens
                        </p>
                        <p style={{ color: '#fff' }}>
                            Kids
                        </p>
                        <p style={{ color: '#fff' }}>
                            Electronics
                        </p>

                        <p style={{ color: '#fff' }}>
                            Jewellery
                        </p>
                        <p style={{ color: '#fff' }}>
                            Footwears
                        </p>

                    </Col>
                    <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#fff' }}>

                            About Us
                        </h6>
                        <p style={{ color: '#fff' }}>
                            Pricing
                        </p >
                        <p style={{ color: '#fff' }}>
                            Settings
                        </p>
                        <p style={{ color: '#fff' }}>
                            Career
                        </p>
                        <p style={{ color: '#fff' }}>
                            Login
                        </p>
                    </Col>
                    <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#fff' }}>

                            Contact
                        </h6>
                        <p style={{ color: '#fff' }}>
                            <span style={{ fontSize: "20px" }}><MdHome /></span>
                            <span> New York, NY 10012, US</span>
                        </p>
                        <p style={{ color: '#fff' }}>
                            <span style={{ fontSize: "20px" }}><FaEnvelope /></span>
                            <span> bj123@bhushKart.com</span>
                        </p>
                        <p style={{ color: '#fff' }}>
                            <span style={{ fontSize: "20px" }}><FaPhoneSquareAlt /></span>
                            <span> +0123456</span>
                        </p>
                        <p style={{ color: '#fff' }}>
                            <span style={{ fontSize: "20px" }}><TiPrinter /></span>
                            <span> +0123456</span>
                        </p>



                    </Col>
                    <hr style={{ color: '#fff' }} />
                </Row>
            </Container>
         



        </footer>

    );

};

export default Footer;