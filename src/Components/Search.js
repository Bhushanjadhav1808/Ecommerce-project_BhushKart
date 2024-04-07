import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { items } from './AllData';
import Button from 'react-bootstrap/Button';


const Search = () => {
  // console.log(useParams())
  const {term} = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () =>{
      const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
      // console.log(data)
      setFilterData(data)
    }

    filteredData();
    
  }, [term])
  


  return (
  <>
  <div>
  {
        filterData.map((item) => (


          <div className="col-md-3" style={{ display: 'inline-block'}}>



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
                <img src={item.imgSrc} className="img-fluid rounded thumbnail-image" alt='' style={{width:'50%'}}/>

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


               

                <div className="d-flex justify-content-between align-items-center pt-1">
                  <div>
                    <i className="fa fa-star-o rating-star"></i>
                    <span className="rating-number">4.8</span>
                  </div>

               <Button variant="warning" style={{width:'30%',height:'10%'}}>ADD+</Button>
               <Button variant="danger" style={{width:'30%',height:'10%'}} >BUY</Button>

                </div>



              </div>

            </div>






           






          </div>



        ))
      }
  </div>
  </>
  )
}

export default Search