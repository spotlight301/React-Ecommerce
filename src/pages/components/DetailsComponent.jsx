const DetailsComponent = ({ data }) => {
  return (
    <div className="bg-stone-700/40 w-full h-screen left-0 top-0 box-border absolute flex items-center justify-center overflow-hidden z-[100]">
      <div className="relative w-full max-w-[80%] p-10 text-gray-800 bg-white rounded shadow-xl lg:p-20 md:text-left">
        <div className='flex justify-end rounded-full border-spacing-3'>
          <button classNameName="px-2 text-gray-600 border rounded-full hover:text-gr border-spacing-3">
            X
          </button>
        </div>

        <div className="items-center -mx-10 md:flex">
          <div className="w-full px-10 mb-10 md:w-1/2 md:mb-0">
            <img src={data.image_URL} className="relative z-10 w-full border-4 border-yellow-200" alt="" />
          </div>

          <div className="w-full px-10 md:w-1/2">
            <div className="mb-10">
              <h1 className="mb-5 text-2xl font-bold uppercase">{data.name}</h1>
              <p className="text-sm">{data.description}</p>
            </div>
            <div>
              <div className="inline-block mr-5 align-bottom">
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="text-5xl font-bold leading-none align-baseline">{data.price}</span>
                <span className="text-2xl leading-none align-baseline">.99</span>
              </div>
              <div className="inline-block align-bottom">
                <button className="px-10 py-2 font-semibold text-yellow-900 bg-yellow-300 rounded-full opacity-75 hover:opacity-100 hover:text-gray-900"><i className="mr-2 -ml-2 mdi mdi-cart"></i> BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsComponent;
