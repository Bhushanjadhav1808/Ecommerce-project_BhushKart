import React from 'react'
import { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './ProductData.css'


import { items } from './AllData'

const ProductData = () => {
    const{id}=useParams()
    const[product,setProduct]=useState({})
    const[related,setRelated]=useState([])
    
    useEffect(()=>{
const FilterProduct=items.filter((product)=>product.id == id)
setProduct(FilterProduct[0])
console.log(FilterProduct)

const RelatedProduct= items.filter((r)=>r.category === product.category)
setRelated(RelatedProduct)
console.log("RelatedProduct",RelatedProduct)

    },[id,product.category])
   
  return (
    <>
 <section className="py-5"  >
  <div className="container" >
    <div className="row gx-5" >
      <aside className="col-lg-6">
        <div className="border rounded-4 mb-3 d-flex justify-content-center"  key={items.id} >
          
            <img  src={product.imgSrc} style={{width: '80%', height: '50vh', margin: 'auto'}} className="rounded-4 fit" alt=''/>
         
        </div>
        <div className="d-flex justify-content-center mb-3">

          
        <a style={{display:'flex',justifyContent:'center',alignItems:'center'}}data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank">
        <img width="60" height="60" className="rounded-2" src={product.imgSrc}alt='' />

        </a>
         
        
          
        <a style={{display:'flex',justifyContent:'center',alignItems:'center'}}data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank">
        <img width="60" height="60" className="rounded-2" src={product.imgSrc1}alt='' />

        </a>
          
          
        <a  style={{display:'flex',justifyContent:'center',alignItems:'center'}}data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank">
        <img width="60" height="60" className="rounded-2" src={product.imgSrc2}alt='' />

        </a>
          
        <a style={{display:'flex',justifyContent:'center',alignItems:'center'}}data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank">
        <img width="60" height="60" className="rounded-2" src={product.imgSrc3}alt='' />

        </a>
        <a style={{display:'flex',justifyContent:'center',alignItems:'center'}}data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank">
        <img width="60" height="60" className="rounded-2" src={product.imgSrc4}alt='' />

        </a>
        <a  style={{display:'flex',justifyContent:'center',alignItems:'center'}}data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank">
        <img width="60" height="60" className="rounded-2" src={product.imgSrc5}alt='' />

        </a>
  </div>
        
      </aside>
      <main className="col-lg-6" >
        <div className="ps-lg-3" >
          <h4 className="title text-dark">
           {product.title}
          </h4>
          <div className="d-flex flex-row my-3">
            <div className="text-warning mb-1 me-2">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span className="ms-1">
                4.5
              </span>
            </div>
            <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
            <span className="text-success ms-2">In stock</span>
          </div>

          <div className="mb-3">
            <span className="h5">{product.price}</span>
           
          </div>

          <p>
           {product. description}
          </p>

          <div className="row">
            <dt className="col-3">Type:</dt>
            <dd className="col-9">Regular</dd>

            <dt className="col-3">Color</dt>
            <dd className="col-9">{product.Color}</dd>

            <dt className="col-3">Material</dt>
            <dd className="col-9">{product.Material}</dd>

            <dt className="col-3">Brand</dt>
            <dd className="col-9">{product.title}</dd>
          </div>

          <hr />

          <div className="row mb-4">
           
          
            
          </div>
          <a href="#" className="btn btn-warning shadow-0"> Buy now </a>
          <a href="#" className="btn btn-primary shadow-0" style={{marginLeft:'5px'}}> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>
          <a href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3"  style={{marginLeft:'5px'}}> <i className="me-1 fa fa-heart fa-lg"></i> Save </a>
        </div>
      </main>
    </div>
  </div>
</section>
<div>
{
        related.map((item) => (


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

export default ProductData