import React , { useState } from "react";

export default function App(){
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className="superNav border-b py-2 bg-gray-100">
        <div className="container w-10/12 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <div className="text-center sm:text-left space-x-3">
              <select className="border-0 bg-gray-100">
                <option value="en-us">EN-US</option>
              </select>
              <span className="hidden lg:inline-block md:inline-block sm:inline-block">
                <strong>info@fItZy.com</strong>
              </span>
              <span>
                <i className="fa-solid fa-phone me-1 text-info"></i>
                <strong>1-800-123-1234</strong>
              </span>
            </div>
            <div className="text-right hidden lg:block space-x-3">
              <span>
                <i className="fa-solid fa-money-bill-transfer mr-1"></i>
                <a className="text-gray-500" href="#">
                  Premium
                </a>
              </span>
              <span>
                <i className="fa-solid fa-file text-gray-500 mr-1"></i>
                <a className="text-gray-500" href="#">
                  Policy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white py-3 shadow-lg">
        <div className="container w-10/12 mx-auto flex flex-wrap items-center justify-between">
          <div className="space-x-4">
            <a href="#" className="space-x-1 text-2xl font-bold leading-tight">
              <i className="fa-solid fa-shop me-2"></i>
              <strong>fItZy</strong>
            </a>
          </div>
          <div className="flex md:hidden">
            <button id="resp" onClick={toggleMenu}>
              <img
                className={`toggle ${menuVisible ? 'hidden' : 'block'}`}
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width="40"
                height="40"
              />
              <img
                className={`toggle ${menuVisible ? 'block' : 'hidden'}`}
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width="40"
                height="40"
              />
            </button>
          </div>

          <div
            className={`${menuVisible ? 'block' : 'hidden'} md:flex w-full md:w-auto container mx-auto w-10 md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none 
              
            `}
          >
            <div className="relative text-gray-600 block md:inline-block">
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="border w-80 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: 'new 0 0 56.966 56.966;' }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>

          <div className={` md:w-auto md:flex text-left text-bold mt-5 md:mt-0 ${menuVisible ? 'block' : 'hidden'}`}>
            <a href="#" className="block md:inline-block px-1 transition-all hover:font-bold hover:bg-pink-700 hover:text-white py-1 mr-6 shadow-sm font-display max-w-sm text-xl  leading-tight">
              <span>About</span>
            </a>
            <a href="#" className="block md:inline-block px-1 transition-all hover:font-bold hover:bg-pink-700 hover:text-white py-1 mr-6 shadow-sm font-display max-w-sm text-xl  leading-tight">
              <span>Contact</span>
            </a>
            <a href="#" className="block md:inline-block px-1 transition-all hover:font-bold hover:bg-pink-700 hover:text-white   py-1 shadow-sm font-display max-w-sm text-xl leading-tight">
              <span >
                <i className="fa-solid fa-cart-shopping"></i> cart
              </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}