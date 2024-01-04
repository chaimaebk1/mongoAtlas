import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const Product = ({ product }) => {
  return (
    <Link href={`/products/${product._id}`}>
      <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition">
        <div className="flex items-end justify-end h-56 w-full bg-cover relative">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
          />
          <button className="absolute z-10 p-2 rounded-full  text-white mx-5 -mb-4  focus:outline-none focus:bg-green-500" style={{backgroundColor : "rgb(234, 166, 54)"}}>
            <ShoppingCartIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="px-5 py-3">
        <h3 className="text-lg uppercase" style={{color :"rgb(234, 166, 54)" , fontWeight : "bold"}}>{product.name}</h3>
        <span className=" mt-2" style={{color :"rgb(30, 25, 22)" , fontWeight : "bold"}}>${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
