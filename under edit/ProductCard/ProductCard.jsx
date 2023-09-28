import React from 'react';
import shose1 from './assets/shose1.jpg';
const Card = () => {
  return (
    <div className=' m-4 flex rounded-lg md2:grid'>
    <div className=' bg-slate-200    rounded-lg  p-4  '>
    <div className=' flex justify-center items-center  '>
    <p className=' absolute top-6 left-80 bg-lime-300  rounded-xl px-2 py-1 '>catogory</p>
    <img src={shose1} className='flex justify-center rounded-lg items-center h-56 relative'/>
    </div>
    <div className='flex mt-3 justify-between'>
      <div className='grid'>
        <h3 className='  text-4xl'> name</h3>
        <p className=''>details</p>
      </div>
      <p className="text-3xl p-2 font-bold"> $440.50</p>
    </div>
      <div className='flex justify-center items-center'>
      <button className=" px-2 py-1 bg-lime-700 text-center text-white rounded-lg mr-3 ml-2 hover:bg-lime-300 hover:text-white ">show</button>
      <a href="" className=" px-2 py-1 bg-lime-700 text-center text-white rounded-lg  hover:bg-lime-300 hover:text-white ">bay</a>
      </div>


    </div>
    </div>
  )
}

export default Card;
