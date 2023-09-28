import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import products from './../../../assets/products.json';
import Category from "./Category";

// Filter Function =================================================================
const compare = (txt, sub) =>
  txt.toLocaleLowerCase().includes(sub.toLocaleLowerCase());

function filterData(data, filterTxt) {
  return data.filter(
    (item) => compare(item.name, filterTxt) || compare(item.brand, filterTxt)
  );
}
// =======================================================================


const ProductsContainer = () => {
  const [activeCategory, setactiveCategory] = useState("All");
  const [displaySearchBtn, setDisplaySearchBtn] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const categoryHandler = (cat) => {
    setactiveCategory(cat);
  };

  useEffect(() => {
    if (activeCategory === "All") {
      setData(filterData(products, search));
    } else {
      const filteredData = filterData(products, search).filter((item) => {
        return item.category.toLowerCase() === activeCategory.toLowerCase();
      });
      setData(filteredData);
    }
  }, [activeCategory, search]);


  const displaySearchBtnHandler = () => {
    setDisplaySearchBtn(!displaySearchBtn);
  };

  // Array of categoris 
  const categories = ["All", "Jeans", "Dresses", "Wallets", "T-Shirts", "Footwear"]

  return (
    <div className="container mx-auto my-7">

      {/*===================================== Categories =====================================*/}
      <div className="flex items-center gap-2 mb-4">
        <button
          className={`w-9 h-9 text-white flex justify-center items-center rounded-full  transition-all duration-200 ${displaySearchBtn
            ? "bg-red"
            : "bg-secondry/60 hover:bg-secondry"
            }`}
          onClick={displaySearchBtnHandler}
        >
          {displaySearchBtn ? (
            "X"
          ) : (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#EEE"
                d="m14.5 14.5l-4-4m-4 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"
                strokeWidth={2}
              ></path>
            </svg>
          )}
        </button>
        <span className="text-white">|</span>
        <div className="flex gap-4 text-lg ">
          {categories.map((category, idx) => (<Category name={category} handler={() => { categoryHandler(category); }} activeCategory={activeCategory} key={idx} />))}
        </div>
      </div>
      {/*======================================================================================*/}

      {/*===================================== Search Bar =====================================*/}
      <div className="mb-10">
        {displaySearchBtn && (
          <input
            type="search"
            placeholder="Search"
            className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none text-white font-semibold text-xl focus:border-green-300 transition-all duration-200 bg-white/20 backdrop-blur-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
      </div>
      {/*======================================================================================*/}

      {/*===================================== Display Product =====================================*/}
      <div className="flex flex-wrap gap-4 justify-around">
        {data.length > 0 &&
          data.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
              />
            );
          })}
      </div>
      {/*===========================================================================================*/}
    </div>
  );
}

export default ProductsContainer;
