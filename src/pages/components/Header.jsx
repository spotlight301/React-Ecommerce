import HeaderCard from './HeaderCard';
import products from '../../../assets/products.json';
import { useEffect, useState } from 'react';

const Header = (props) => {
  const [product, setProduct] = useState(products[0]);

  const randomProduct = () => {
    setProduct(products[Math.floor(Math.random()*products.length)]);
    setTimeout(randomProduct, 6000);
  }

  useEffect(() => {
    randomProduct();
  }, []);

  return (
    <section className="flex h-[700px] max-Cmd:h-fit max-Cmd:py-12 max-Cmd:pt-[6rem] overflow-hidden justify-between items-center bg-secondry/20 backdrop-blur-sm pt-5 px-20 max-Csm:px-5">
      <div className="h-full flex items-start justify-center w-1/2 flex-col gap-5 pt-[10rem] max-Cmd:pt-0 max-Clg:w-full max-lg:items-center max-Clg:text-center">
        <h1 className='text-white font-semibold text-7xl w-fit max-Cmd:text-5xl max-Csm:text-3xl'>Onl<span className='text-text'>ine Sh</span>op</h1>
        <p className='text-white/80 font-semibold text-2xl max-Cmd:text-lg max-Csm:text-sm'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam tempore, sed sapiente sequi quaerat, autem omnis voluptatum
          quia modi qui velit culpa recusandae eos at veniam quam error facere alias.
        </p>
        <a href='#products' className='mt-[4rem] max-Csm:mt-[2rem] max-Csm:text-xs mt text-lg font-semibold text-white/70 transition-all border-2 border-white rounded-xl px-3 py-4 hover:bg-secondry/20 hover:backdrop-blur-md hover:text-white max-Cmd:px-2 max-Cmd:py-3 max-Cmd:text-sm max-Csm:py-2'>Let's buy some products🤗</a>
      </div>
      <HeaderCard product={product} detailsHandel={props.detailsHandel} className="max-Clg:hidden" />
    </section>
  );
}

export default Header;
