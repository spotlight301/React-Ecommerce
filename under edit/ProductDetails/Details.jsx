const Details = (props) => {

    return (
    <>
        <div className="relative flex items-center min-h-screen p-5 overflow-hidden bg-gray-300 bg-opacity-20 min-w-screen lg:p-10">
        <div className="relative w-full max-w-6xl p-10 mx-auto text-gray-800 bg-white rounded shadow-xl lg:p-20 md:text-left">
        <div className='flex justify-end rounded-full border-spacing-3'>
        <button classNameName="px-2 text-gray-600 border rounded-full hover:text-gr border-spacing-3">
        X
        </button>    
        </div>
        <div className="items-center -mx-10 md:flex">
                <div className="w-full px-10 mb-10 md:w-1/2 md:mb-0">
                    <div className="relative">
                        <img src={props.image_url} classNameName="relative z-10 w-full" alt=""/>
                        <div className="absolute z-0 border-4 border-yellow-200 top-10 bottom-10 left-10 right-10"></div>
                    </div>
                </div>
                <div className="w-full px-10 md:w-1/2">
                    <div className="mb-10">
                        <h1 className="mb-5 text-2xl font-bold uppercase">{props.name}</h1>
                        <p className="text-sm">{props.description}... <a href="#" className="inline-block text-xs leading-none text-gray-900 border-b border-gray-900 opacity-50 hover:opacity-100">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                    </div>
                    <div>
                        <div className="inline-block mr-5 align-bottom">
                            <span className="text-2xl leading-none align-baseline">$</span>
                            <span className="text-5xl font-bold leading-none align-baseline">{props.price}</span>
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
    </>
    );
};

export default Details;