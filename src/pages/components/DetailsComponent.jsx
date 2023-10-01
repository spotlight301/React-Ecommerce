const DetailsComponent = (props) => {
  const data = props.data;
  const price = String(data.price).split('.');


  // Add product to cart
  const addToCart = () => {
    return new Promise((resolve) => {
      let products;

      if (localStorage.getItem("products") === null) {
        products = [];
      } else {
        products = JSON.parse(localStorage.getItem("products"));
      }

      let found = false;
      for (let i = 0; i < products.length; i++) {
        if (data.id === products[i].id) {
          products[i].number++;
          found = true;
          break;
        }
      }

      if (!found) {
        products.push({ ...data, number: 1 });
      }

      localStorage.setItem("products", JSON.stringify(products));

      // Update localStorage for the salesNum
      const salesNum = Number(localStorage.getItem("salesNum")) + 1;
      localStorage.setItem("salesNum", salesNum.toString());

      // Dispatch a storage event to notify other tabs if needed
      window.dispatchEvent(new Event("storage"));

      // Resolve the Promise once the operation is complete
      resolve();
    });
  };

  return (
    <div className={`bg-secondry/30 backdrop-blur-sm left-1/2 top-[50vh] fixed -translate-x-1/2 -translate-y-1/2 box-border flex items-center justify-center overflow-hidden z-[100] transition-all ${props.isActive ? "w-full h-screen" : "w-0 h-0 delay-100"}`}>
      <div className={`relative w-[80%] max-w-[1152px] h-[500px] max-Clg:h-auto items-center justify-center p-7 max-Cxs:p-2 text-text bg-primary/90 rounded-xl shadow-md transition-all ${props.isActive ? "w-full delay-100" : "w-1/4 h-1/4"} flex max-Cmd:flex-col`}>
        {/* Close button */}
        <button className="group w-6 aspect-square hover:scale-150 hover:bg-secondry/20 transition-all rounded-md  hover:text-gr flex justify-end border-spacing-3 absolute top-12 right-12 max-Cxs:right-2 max-Cxs:top-2" onClick={() => props.activeHandel(false)}>
          <span className="inline-block h-1 w-5 top-1/2 left-1/2 absolute rotate-45 -translate-x-1/2 -translate-y-1/2 transition-all bg-white group-hover:rotate-0"></span>
          <span className="inline-block h-1 w-5 top-1/2 left-1/2 absolute -rotate-45 -translate-x-1/2 -translate-y-1/2 transition-all bg-white group-hover:rotate-0"></span>
        </button>

        {/* Image */}
        <img src={data.image_URL} className="z-10 border-4 border-yellow w-1/2 rounded-md" alt="" />
        
        {/* Details */}
        <div className="w-full px-10 h-full flex flex-col justify-between max-Cxs:px-0">
          {/* Tiltle and Description */}
          <div className="mb-10 mt-5">
            <h1 className="mb-5 text-4xl font-bold uppercase max-Clg:text-2xl max-Cxm:text-base max-Cmd:text-center">{data.name}</h1>
            <p className="text-xl mt-5 max-Clg:text-base max-Cxm:text-xs max-Cmd:text-center">{data.description}</p>
          </div>

          {/* Price and buy btn */}
          <div className="flex justify-between max-Cmd:flex-col max-Cmd:items-center">
            <div className="inline-block mr-5 align-bottom max-Cmd:mb-5">
              <span className="text-2xl leading-none align-baseline max-Clg:text-xl">$</span>
              <span className="text-5xl font-bold leading-none align-baseline max-Clg:text-3xl max-Cxm:text-base max-Cmd:text-3xl">{price[0]}{price.length >= 2 ? (<span className="text-2xl max-Clg:text-base max-Cxm:text-xs max-Cmd:text-base">.{price[1]}</span>) : null}</span>
            </div>

            <button className="px-10 py-2 inline-block align-bottom font-semibold rounded-lg transition-all opacity-75 hover:opacity-100 hover:bg-secondry/20 hover:backdrop-blur-md hover:scale-110 hover:z-20 max-Clg:px-6 max-Clg:py-0 max-Cxm:text-sm max-Cxm:px-3 max-Cmd:w-full max-Cmd:py-2" onClick={addToCart}>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsComponent;
