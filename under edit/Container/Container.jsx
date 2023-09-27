/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import products from "./assets/products.json";
import Card from "./Card";
import filterData from "./utils/filtering.mjs";

const Container = () => {
    const [cat, setCat] = useState("all");
    const [showSearchBtn, setShowSearchBtn] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const btnHandler = (e) => {
        setCat(e.target.dataset.cat);
    };

    useEffect(() => {
        if (cat === "all") {
            setData(products);
        } else {
            const filteredData = products.filter((item) => {
                return item.category.toLowerCase() === cat.toLowerCase();
            });
            setData(filteredData);
        }
    }, [cat]);

    const showSearchBtnHandler = () => {
        setShowSearchBtn(!showSearchBtn);
    };

    const handlerSearch = (e) => {
        e.preventDefault();
        if (search !== "") {
            const filteredData = filterData(products, search);
            setData(filteredData);
        }
    };

    return (
        <div className="container mx-auto my-7">
            <div className="flex items-center gap-2 mb-4">
                <button
                    className={`w-9 h-9 bg-gray-200 flex justify-center items-center rounded-full  transition-all duration-200 ${
                        showSearchBtn
                            ? "bg-red-400 text-white"
                            : "hover:bg-green-300"
                    }`}
                    onClick={showSearchBtnHandler}
                >
                    {showSearchBtn ? (
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
                                stroke="#000000"
                                d="m14.5 14.5l-4-4m-4 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"
                            ></path>
                        </svg>
                    )}
                </button>
                <span>|</span>
                <div className="flex gap-4 text-lg ">
                    <button
                        className={`bg-gray-200 px-4 py-1 rounded-full font-semibold hover:bg-green-300 transition-all duration-200 ${
                            cat === "all" ? "bg-green-300" : ""
                        }`}
                        data-cat="all"
                        onClick={btnHandler}
                    >
                        All
                    </button>
                    <button
                        className={`bg-gray-200 px-4 py-1 rounded-full font-semibold hover:bg-green-300 transition-all duration-200 ${
                            cat === "mobiles" ? "bg-green-300" : ""
                        }`}
                        data-cat="mobiles"
                        onClick={btnHandler}
                    >
                        Mobiles
                    </button>
                    <button
                        className={`bg-gray-200 px-4 py-1 rounded-full font-semibold hover:bg-green-300 transition-all duration-200 ${
                            cat === "laptops" ? "bg-green-300" : ""
                        }`}
                        data-cat="laptops"
                        onClick={btnHandler}
                    >
                        Laptops
                    </button>
                    <button
                        className={`bg-gray-200 px-4 py-1 rounded-full font-semibold hover:bg-green-300 transition-all duration-200 ${
                            cat === "clothes" ? "bg-green-300" : ""
                        }`}
                        data-cat="clothes"
                        onClick={btnHandler}
                    >
                        Clothes
                    </button>
                </div>
            </div>
            <div className="mb-10">
                {showSearchBtn && (
                    <form
                        className="flex w-full md:w-6/12 m-auto"
                        onSubmit={handlerSearch}
                    >
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full border-2 border-gray-300 rounded-s-lg p-2 focus:outline-none focus:border-green-300 transition-all duration-200 text-lg"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            type="submit"
                            className=" border-2  border-gray-300 rounded-e-lg p-4 focus:outline-none hover:border-green-300 hover:bg-green-300 transition-all duration-200"
                        >
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="none"
                                    stroke="#000000"
                                    d="m14.5 14.5l-4-4m-4 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"
                                ></path>
                            </svg>
                        </button>
                    </form>
                )}
            </div>

            <div className="flex flex-wrap gap-3 justify-around">
                {data.length > 0 &&
                    data.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                image_URL={item.image_URL}
                                name={item.name}
                                price={item.price}
                                className="w-full md:w-1/2 lg:w-1/4"
                                style={{
                                    minWidth: "200px",
                                    // width: "fit-content",
                                    maxWidth: "300px",
                                }}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Container;
