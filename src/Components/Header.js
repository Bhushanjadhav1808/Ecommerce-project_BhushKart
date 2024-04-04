
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiShoppingCart } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa6";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
import { FaSearch,FaLock } from "react-icons/fa";



function Header() {
    

    return (
        <div>

            <Navbar bg="dark" data-bs-theme="dark"  >
                <Container>
                    <Navbar.Brand href="/" style={{ fontFamily: 'Fantasy' }}>BhushKart</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/" style={{ fontFamily: 'Fantasy' }}>Home</Nav.Link>

                    </Nav>

                    <Form.Control size="sm" type="text" placeholder="Please Search Product" style={{ width: "30%", marginRight: "1%", fontFamily: 'Fantasy' }} />
                    <Nav.Link style={{ color: "#fff" }}><FaSearch /></Nav.Link>

                    <Nav>

                        <Nav.Link href="/sign" style={{ fontFamily: 'Fantasy' }}>Sign In
                            <span style={{ color: "#fff" }}> <FaUserTie /></span>
                        </Nav.Link>
                        <h2 style={{ color: '#fff', marginLeft: "70px" }}><GiShoppingCart />

                        </h2>
                        <span style={{ color: 'red',fontSize:'20px' }}>{0}<FaRegFaceKissWinkHeart style={{ color: 'red' }}></FaRegFaceKissWinkHeart></span>
                        <Nav.Link href="/details"style={{marginLeft:"20px"}}>
                            <span style={{ color: "#fff" }}> < FaLock/></span>
                        </Nav.Link>

                    </Nav>
                   

                </Container>
            </Navbar>


        </div>
    )
}

export default Header