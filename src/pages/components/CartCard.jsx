const CartCard = (props) => {
  const data = props.data;

  let minus_counter = () => {
    props.handelProductData(data.id, data.number-1, 0);
  }


  let add_counter = () => {
    props.handelProductData(data.id, data.number+1, 1);
  }

  return (
    <div className="group grid grid-cols-11 text-white p-2 items-center my-1 rounded-lg bg-secondry/20 backdrop-blur-md relative overflow-hidden hover:-skew-x-6 hover:skew-y-1 hover:scale-110 hover:z-30 hover:shadow-xl transition-all max-Cmd:flex max-Cmd:flex-col max-Cmd:hover:-skew-x-1 max-Cmd:hover:skew-y-1 max-Cmd:w-[85%] max-Cmd:max-w-[360px]"> 
      {/* light effect */}
      <div className="h-[50px] w-[200%] top-0 -left-full absolute bg-white/25 blur-lg rotate-45 group-hover:left-12 transition-all max-Cmd:h-[100px] max-Cmd:w-[400%] max-Cmd:-left-[200%] max-Cmd:group-hover:left-full max-Cmd:top-full max-md:gap-3"></div>
      {/* Img */}
      <div className={`bg-[url('${data.image_URL}')] bg-center bg-cover rounded-lg aspect-square overflow-hidden w-full flex col-span-1 z-10`}></div>
      {/* name */}
      <span className="font-semibold text-lg col-span-4 text-center z-10 max-Cxm:text-xs max-md:text-lg max-md:mt-3">
        {data.name}
      </span>
      {/* Counter */}
      <div className="col-span-3 flex justify-end items-center z-10">
        <button onClick={minus_counter} className="bg-red/40 backdrop-blur-sm text-4xl font-semibold text-white leading-3 pb-4 pt-2 rounded-md  px-5 hover:bg-red transition-all max-Cxm:px-2 max-Cxm:pt-1 max-Cxm:pb-3">-</button>
        <span className="text-xl p-2 ">{data.number}</span>
        <button onClick={add_counter} className="bg-red/40 backdrop-blur-sm text-4xl font-semibold text-white leading-3 pb-4 pt-2 rounded-md  px-4 hover:bg-secondry transition-all hover:text-text max-Cxm:px-1 max-Cxm:pt-1 max-Cxm:pb-3">+</button>
      </div>
      {/* Price */}
      <span className="font-semibold text-xl col-span-3 text-end pr-4 max-Cxm:pr-4 z-10 max-Cxm:text-xs max-Cmd:text-lg">{Math.round(data.price*data.number)}$</span>
    </div>
  );
}

export default CartCard;
