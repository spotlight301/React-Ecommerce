import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import shose1 from '../../img/shose1.jpg';
function ProductCard() {
  return (
    <Card style={{ width: '18rem', margin: '7px'}}>
      <Card.Img variant="top" src={shose1} />
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='bg-red'>
        <p className='mony'>50$</p>
        <Button variant="primary">Add to cart</Button>
        </div>
       
      </Card.Body>
    </Card>
  );
}



export default ProductCard;
