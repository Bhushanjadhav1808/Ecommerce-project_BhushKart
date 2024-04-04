import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
import Sell from './Sell';



function Home() {
  const [products, setProducts] = useState([])


  useEffect(() => {
    let API = async () => {
      let ApiF = await fetch('https://api.escuelajs.co/api/v1/products')
      let data = await ApiF.json()
      setProducts(data)
      console.log(data)


    }
    API()
  }, [])



  return (

    <div>
      <Sell />
      {
        products.map((item) => (
          <div style={{ display: 'inline-block' }}>

            <Card style={{ width: '19rem', margin: 33, justifyContent: 'center' }}>
              <Card.Img variant="top" src={item.images} alt='' />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Fantasy', textAlign: 'center' }}>{item.title}</Card.Title>

                <Card.Text style={{ fontFamily: 'Fantasy', textAlign: 'center' }}>
                  Price:{item.price}
                </Card.Text>
                <div style={{ justifyContent: 'center' }}>
                  <span style={{ margin: 15 }} > <Button variant="danger" style={{ fontFamily: 'Fantasy' }}>Buy Now</Button></span>

                  <span > <Button variant="success" style={{ fontFamily: 'Fantasy' }}>ADD_CARD</Button></span>
                </div>


              </Card.Body>
            </Card>
          </div>



        ))
      }




    </div>
  )
}

export default Home