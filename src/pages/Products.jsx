import ProductsContainer from './components/ProductsContainer';
import DetailsComponent from './components/DetailsComponent';
import { useState } from 'react';
import Header from './components/Header';

const Products = () => {
  const [details, setDetails] = useState({"id": null, "name": null, "brand": null, "price": null, "description": null, "category": null, "image_URL": null});
  const [isActive, setIsActive] = useState(false);

  // Handel Details of product
  const detailsHandel = (data) => {
    setDetails(data);
    setIsActive(true);
  }

  // Active of details
  const isActiveHandel = (state) => {
    setIsActive(state);
  }

  return (
    <>
      <Header detailsHandel={detailsHandel} />
      <ProductsContainer detailsHandel={detailsHandel} />
      <DetailsComponent data={details} activeHandel={isActiveHandel} isActive={isActive} />
    </>
  )
}

export default Products;
