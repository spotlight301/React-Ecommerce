import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [salesNum, setSalesNum] = useState(localStorage.getItem("salesNum"));

  useEffect(() => {
    const handleStorageChange = () => {
      setSalesNum(localStorage.getItem("salesNum"))
    };

    handleStorageChange();

    // Listen for changes in localStorage
    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <nav className="w-full max-w-[1440px] bg-secondry/20 backdrop-blur-md py-4 max-Cmd:py-2 fixed top-0 left-1/2 -translate-x-1/2 z-50 px-12 flex justify-between items-center">
      <Link className="text-white text-4xl font-bold max-Cmd:text-3xl" to="/" rel="noopener noreferrer" >Lo<span className="text-text">go.</span></Link>
      <Link className="relative text-white text-lg cursor-pointer rounded-md hover:bg-secondry/20 hover:backdrop-blur-md transition-all p-2 max-Cmd:p-1"  to="/Basket" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 aspect-square max-Cmd:w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        <span className="absolute text-text font-bold translate-x-1/2 -translate-y-1/2 top-0 right-0 max-Cmd:text-xs">{salesNum}</span>
      </Link>
    </nav>
  );
}

export default NavBar;
