import { useState } from "react";

const CartCard = (props) => {
  let data = props.data;

  const [counter, setcounter] = useState(1);


  let minus_counter = () => {
    if (counter > 1) {
      setcounter(counter-1);
    }else
    {
      console.log(this);
    }
  }


  let add_counter = () => {
      setcounter(counter+1);
  }


  return (
    <div className="flex justify-between items-center px-6"> 
      {/* Img */}
      <div className="w-[6rem] rounded-full aspect-square overflow-hidden flex justify-center items-center">
        <img src={data.image_URL} className="min-h-full min-w-full w-auto h-auto " />
      </div>
      {/* name */}
      <span className="font-semibold text-lg ">
        {data.name}
      </span>
      {/* Counter */}
      <div>
        <button onClick={minus_counter} className="bg-blue-600 text-4xl font-semibold text-white leading-3 pb-4 pt-2 rounded-md  px-5">-</button>
        <span className="text-xl p-2 ">{counter}</span>
        <button onClick={add_counter} className="bg-blue-600 text-4xl font-semibold text-white leading-3 pb-4 pt-2 rounded-md  px-4">+</button>
      </div>
      {/* Price */}
      <span className="font-semibold text-lg">{data.price}$</span>
    </div>
  );
}

export default CartCard;
