import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'

const CardsCommponants = () => {
  return (
    <Container>
        <Row>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Row>
    </Container>
  )
}

export default CardsCommponants
