
import Navbar from 'react-bootstrap/Navbar';
import { GiShoppingCart } from "react-icons/gi";
import {useState} from 'react'
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";
import Nav from 'react-bootstrap/Nav';
import { FaLock } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { Link,useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function Header() {
    
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/search/${searchTerm}`)
        setSearchTerm("")
      }

     

    return (
        <>
<Navbar bg="dark" data-bs-theme="dark" className='sticky-top' >
    <Container style={{ width: '100%' }} >
        <Link to={"/"} style={{ fontFamily: 'Fantasy', textDecoration: 'none',color:'orange',fontSize:'30px' }}>BhushKart</Link>


        <Nav className="me-auto">

            <Link to={"/home"} style={{ fontFamily: 'Fantasy', textDecoration: 'none', marginLeft: '20px',color:'#fff' }}>Home</Link>

        </Nav>


        <form className="form-inline my-2 my-lg-0"  onSubmit={handleSubmit}
        style={{ display: 'flex', marginRight: '20%', width: "30%" }} >
            <input className="form-control mr-sm-2" type="search"
             value={searchTerm}
             onChange={(e)=>setSearchTerm(e.target.value)}
             placeholder="Search"
              aria-label="Search"
              
              />

        </form>


        <Nav  >

            <Link to={"/sign"} style={{ fontFamily: 'Fantasy', textDecoration: 'none', marginTop: '10px',color:'#fff',fontSize:'20px' }}>< RiAdminFill /></Link>

           <Link to={'/carddata'}> <h2 style={{ color: '#fff', marginLeft: "80px" }}><GiShoppingCart /></h2></Link> 
            <span style={{ color: 'red', fontSize: '20px' }}>{0}<FaRegFaceKissWinkHeart ></FaRegFaceKissWinkHeart></span>


            <Link to={"/details"} style={{ fontFamily: 'Fantasy', textDecoration: 'none',marginLeft:'20px',marginTop:'10px',color:'#fff' }}>< FaLock /></Link>

        </Nav>


    </Container>
</Navbar>





        </>
    )
}

export default Header