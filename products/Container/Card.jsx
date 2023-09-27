/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ img, name, price, style, className }) => {
    return (
        <div className={`flex ${className}`} style={style}>
            <div className="border-solid border-2 border-neutral-950 bg-white rounded-lg text-center p-4 w-full flex flex-col justify-between">
                <div className=" flex justify-center items-center">
                    <img
                        src={img}
                        alt={name}
                        className="flex justify-center items-center h-56"
                    />
                </div>

                <h3 className=" font-bold text-4xl">{name}</h3>
                <div className="text-3xl p-2">${price}</div>
                <div className="m-4">
                    <i className="fas fa-star text-xl text-amber-400"></i>
                    <i className="fas fa-star text-xl text-amber-400"></i>
                    <i className="fas fa-star text-xl text-amber-400"></i>
                    <i className="fas fa-star text-xl text-amber-400"></i>
                    <i className="fas fa-star-half-alt text-xl text-amber-400"></i>
                </div>
                <a
                    href=""
                    className=" p-3 bg-neutral-950 text-white rounded-lg m-8 hover:bg-red-700 hover:text-white "
                >
                    add to cart
                </a>
            </div>
        </div>
    );
};

export default Card;
