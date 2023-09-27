const Card = (props) => {
  return (
    <div className=' m-4 flex'>
      <div className='border-solid border-2 border-neutral-950 bg-white rounded-lg text-center p-4  '>
        <div className=' flex justify-center items-center'>
          <img src={props.image_URL} className='flex justify-center items-center h-56' />
        </div>

        <h3 className=' font-bold text-4xl'>{props.name}</h3>
        <div className="text-3xl p-2">{props.price}</div>
        <div className="m-4">
          <i className="fas fa-star text-xl text-amber-400"></i>
        </div>
        <a href="" className=" p-3 bg-neutral-950 text-white rounded-lg m-8 hover:bg-red-700 hover:text-white ">buy</a>
      </div>
    </div>
  )
}

export default Card;