import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

const Hero = () => {
  return (
    <div className="h-96 rounded-md overflow-hidden bg-cover bg-center relative" style={{marginTop : "7%"}}>
      <Image
        src="/images/carousel-1.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="bg-gray-900 bg-opacity-60 flex items-center justify-between h-full absolute w-full z-10">
        <div className="px-10 max-w-xl">
          <h2 className="text-2xl text-white font-semibold">Welcome to <span style={{fontWeight : "bold", color : "#eaa636"}}>Sugar Canvas</span></h2>
          <p className="mt-2 text-white" style={{fontPalette :"dark"}}>
          Discover a world where flavors dance and textures delight. From classic pastries to innovative treats, each creation is a masterpiece. Savor the moment with us !
          </p>
          <Link href={`/products`}>
            <button className="flex  font-bold items-center mt-4 px-3 py-2 text-white text-sm uppercase font-medium rounded focus:outline-none focus:bg-green-500" style={{backgroundColor : "#eaa636"}}>
              <span>Command Now</span>
              <ArrowNarrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
