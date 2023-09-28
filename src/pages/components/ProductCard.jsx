function Card({ product }) {
  return (
    <div className='group  rounded-lg flex flex-col justify-between max-w-[23rem] w-[90%] bg-secondry/20 p-4 relative overflow-hidden text-white'>
      {/* light =========================== */}
      <div className="absolute w-[400%] h-[80px] blur-xl bg-white/40 -left-[140%] top-[140%] group-hover:left-[0%] group-hover:top-[0%] rotate-45 z-[0] transition-all"></div>
      {/* ================================= */}
      <div className='relative flex justify-center items-center  rounded-lg w-full aspect-video overflow-hidden'>
        <span className='absolute top-2 right-2 bg-secondry/30 backdrop-blur-md rounded-xl px-2 py-1 z-10'>{product.category}</span>
        <img src={product.image_URL} className='flex justify-center items-center min-h-full min-w-full' />
      </div>
      <div className='flex mt-3 justify-between flex-col z-10'>
        <div className="flex justify-between gap-1">
          <h3 className='text-lg font-bold'>{product.name}</h3>
          <span className="text-3xl font-bold">{product.price}<span className="text-xl text-white/60">$</span></span>
        </div>
        <p className='text-white/60'>{product.description}</p>
      </div>
      <div className='flex justify-end items-center z-10'>
        <button className=" px-2 py-1 bg-red text-center transition-all text-white rounded-lg mr-3 ml-2 hover:bg-red/40 hover:backdrop-blur-md hover:text-white " type="button">Details</button>
        <button className=" px-2 py-1  text-center text-white rounded-lg  hover:bg-secondry/20 transition-all hover:text-white " type="button">Buy</button>
      </div>
    </div>
  )
}

export default Card;
