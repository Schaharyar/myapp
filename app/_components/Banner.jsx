"use client";  // Ensure this is added for client-side rendering in Next.js

import React from "react";
import Lottie from "lottie-react";

import starAnimation from "@/public/animations/star.json";
import planetAnimation from "@/public/animations/planet.json";
import rocketAnimation from "@/public/animations/rocket.json";

const Banner = () => {
  return (
    <div className="relative bg-[rgb(8,193,138)] text-gray-50 text-center p-10 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto mb-2">
      {/* Animated Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Lottie
          loop
          animationData={starAnimation}
          play
          className="absolute w-16 h-16 top-4 left-4"
        />
        <Lottie
          loop
          animationData={starAnimation}
          play
          className="absolute w-16 h-16 top-16 right-36"
        />
        <Lottie
          loop
          animationData={planetAnimation}
          play
          className="absolute w-20 h-20 bottom-10 left-8"
        />
        <Lottie
          loop
          animationData={rocketAnimation}
          play
          className="absolute w-24 h-24 bottom-20 right-8"
        />
      </div>

      {/* Text Content */}
      <h1 className="text-2xl font-bold mb-6">
        What will you build with the best animated icons in the world?
      </h1>
      <button className="bg-white text-green-500 px-6 py-2 rounded-md font-medium hover:bg-gray-100">
        Get started, free!
      </button>
    </div>
  );
};

export default Banner;
