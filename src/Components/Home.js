

import Button from 'react-bootstrap/Button';
import Sell from './Sell';
import './Card.css'
import { Link } from 'react-router-dom';


import Slice from './Redux/Slice';

import { useSelector, useDispatch } from "react-redux";

function Home() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (

    <div>
      <Sell />
      {
        items.map((item) => (


          <div className="col-md-3" style={{ display: 'inline-block' }}>



            <div className="card" style={{ width: '19rem', margin: 35, justifyContent: 'center' }}>

              <div className="image-container">

                <div className="first">

                  <div className="d-flex justify-content-between align-items-center">

                    <span className="discount">-25%</span>
                    <span className="wishlist"><i className="fa fa-heart-o"></i></span>


                  </div>
                </div>
              <div style={{width:'100%'}} key={item.id} >

              <Link to={`/productdata/${item.id}`} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src={item.imgSrc} className="img-fluid rounded thumbnail-image" alt='' />

                </Link>
              
              </div>
               
                
              </div>


              <div className="product-detail-container p-2">

                <div className="d-flex justify-content-between align-items-center">

                  <h5 className="dress-name">{item.title}</h5>

                  <div className="d-flex flex-column mb-2">

                    <span className="new-price">{item.price}</span>
                    <small className="old-price text-right">300</small>
                  </div>

                </div>


                <div classNames="d-flex justify-content-between align-items-center pt-1">

                  <div className="color-select d-flex ">

                    <input type="button" name="grey" class="btn creme" />
                    <input type="button" name="red" class="btn red ml-2" />
                    <input type="button" name="blue" class="btn blue ml-2" />

                  </div>

                  <div className="d-flex ">

                    <span className="item-size mr-2 btn" type="button">S</span>
                    <span className="item-size mr-2 btn" type="button">M</span>
                    <span className="item-size btn" type="button">L</span>

                  </div>


                </div>


                <div className="d-flex justify-content-between align-items-center pt-1">
                  <div>
                    <i className="fa fa-star-o rating-star"></i>
                    <span className="rating-number">4.8</span>
                  </div>
              
               <Button variant="warning" style={{width:'20%',height:'10%'}} onClick={() => dispatch(Slice(item))}>ADD+</Button>
               <Button variant="danger" style={{width:'20%',height:'10%'}} >BUY</Button>
               
                </div>



              </div>

            </div>






            <div className="mt-3" >
              <div className="card voutchers">

                <div className="voutcher-divider">

                  <div className="voutcher-left text-center">
                    <span className="voutcher-name">Monday Happy</span>
                    <h5 className="voutcher-code">#MONHPY</h5>

                  </div>
                  <div className="voutcher-right text-center border-left">
                    <h5 class="discount-percent">20%</h5>
                    <span className="off">Off</span>

                  </div>

                </div>

              </div>

            </div>






          </div>



        ))
      }




    </div>
  )
}

export default Home