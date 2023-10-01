import { useState, useEffect } from "react";
import CartCard from "./components/CartCard";

const BasketPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState([]);

  // Calc totalPrice
  const totalPriceHandel = (newTotalPrice) => {
    setTotalPrice(newTotalPrice);
  }

  // Get data from local storage
  const getProductData = () => {
    if (localStorage.getItem("products") !== null) 
      setData(JSON.parse(localStorage.getItem("products")));
  }

  // Send data to local storage
  const setProductData = (data) => {
    localStorage.setItem("products", JSON.stringify(data));
  }

  // Plus or minus product num in cart
  const handelProductData = (productID, newNumber, operation) => {
    var tempData = data;
    for (let index = 0; index < tempData.length; index++) {
      var product = tempData[index];
      if (productID === product.id) {
        
        // Update localStorage for the salesNum
        var salesNum = Number(localStorage.getItem("salesNum"));
        // operation: 0 => minus || 1 => plus
        if (operation) salesNum += 1; 
        else salesNum -= 1;
        localStorage.setItem("salesNum", salesNum);
        window.dispatchEvent(new Event("storage"));
        
        product = {...product, number: newNumber}
        tempData[index] = product;
        if (product.number <= 0) tempData = tempData.filter((product) => product.id != productID);

        break;
      }
    }
    setProductData(tempData);
    getProductData();
  }

  // Set total price
  const getTotalPrice = () => {
    let initialTotalPrice = 0;

    data.forEach((product) => {
      initialTotalPrice += product.price * product.number;
    });
    setTotalPrice(initialTotalPrice);
  }

  // Calculate initial total price
  useEffect(() => {
    getTotalPrice();
  }, [data]);

  // Display data
  useEffect(() => {
    getProductData();
  }, []);

  
  return (
    <section className="mt-[5rem] w-full overflow-hidden">
      <div className="flex flex-col gap-2 mt-5 px-[8rem] max-Clg:px-[4rem] max-Cxm:px-4 max-Cmd:items-center">
        {data.map((item, idx) => (
          <CartCard data={item} key={idx} totalPriceHandel={totalPriceHandel} totalPrice={totalPrice} handelProductData={handelProductData} />
        )
        )}
      </div>
      <div className="py-4 px-3  bg-secondry/20 backdrop-blur-md rounded-md mx-auto my-8 text-2xl font-bold w-fit capitalize tracking-wide cursor-pointer hover:scale-105 hover:bg-secondry/40 transition-all hover:shadow-2xl">
        <span className="text-text">total: </span>
        <span className="text-white">{Math.round(totalPrice)}<span className="text-sm text-secondry">$</span></span>
      </div>
    </section>
  );
}

export default BasketPage;
