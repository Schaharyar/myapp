"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";

// Import animations
import planetAnimation from "@/public/animations/planet.json";
import starAnimation from "@/public/animations/star.json";

function Hero() {
  const [searchQuery, setSearchQuery] = useState(""); // Define searchQuery state
  const [hoveredAnimation, setHoveredAnimation] = useState(null);

  const handleMouseEnter = (animationName) => {
    setHoveredAnimation(animationName);
  };

  const handleMouseLeave = () => {
    setHoveredAnimation(null);
  };

  return (
    <div>
      <header className="relative flex flex-col items-center justify-center text-center pt-40 pb-28 bg-gray-50 shadow-sm">
        {/* Globe Animation */}
        <div
          className="absolute top-1/2 right-[5%] hidden 2xl:block transform -translate-y-1/2"
          onMouseEnter={() => handleMouseEnter("planet")}
          onMouseLeave={handleMouseLeave}
        >
          <Lottie
            animationData={planetAnimation}
            loop={hoveredAnimation === "planet"} // Play on hover
            className="w-48 h-48"
          />
        </div>
        <div
          className="absolute top-1/2 right-[5%] hidden lg:block 2xl:hidden transform -translate-y-1/2"
          onMouseEnter={() => handleMouseEnter("planet")}
          onMouseLeave={handleMouseLeave}
        >
          <Lottie
            animationData={planetAnimation}
            loop={hoveredAnimation === "planet"} // Play on hover
            className="w-36 h-36"
          />
        </div>

        {/* Star Animation */}
        <div
          className="absolute top-1/2 left-[5%] hidden 2xl:block transform -translate-y-1/2"
          onMouseEnter={() => handleMouseEnter("star")}
          onMouseLeave={handleMouseLeave}
        >
          <Lottie
            animationData={starAnimation}
            loop={hoveredAnimation === "star"} // Play on hover
            className="w-48 h-48"
          />
        </div>
        <div
          className="absolute top-1/2 left-[5%] hidden lg:block 2xl:hidden transform -translate-y-1/2"
          onMouseEnter={() => handleMouseEnter("star")}
          onMouseLeave={handleMouseLeave}
        >
          <Lottie
            animationData={starAnimation}
            loop={hoveredAnimation === "star"} // Play on hover
            className="w-36 h-36"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Access <span className="text-orange-600">27,900+</span> Animated Icons
          </h1>
          <p className="text-md text-gray-900 md:text-xl mb-6">
            Rabbector is a growing library full of carefully crafted,<br /> high-quality static and animated
            icons you won’t find anywhere else.
          </p>

          {/* Search Input */}
          <div className="flex justify-center items-center mb-6">
            <input
              type="text"
              placeholder="Search free and premium icons"
              className="w-1/2 px-4 py-2 border rounded-l-md focus:outline-none focus:border-orange-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on change
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600">
              Search
            </button>
          </div>

          {/* Popular Tags */}
          <p className="flex flex-wrap justify-center text-gray-600 text-center">
            Popular now:
            <span className="text-orange-600 hover:underline cursor-pointer mx-1">Social Media</span>,
            <span className="text-orange-600 hover:underline cursor-pointer mx-1">Money</span>,
            <span className="text-orange-600 hover:underline cursor-pointer mx-1">Arrow</span>,
            <span className="text-orange-600 hover:underline cursor-pointer mx-1">People</span>,
            <span className="text-orange-600 hover:underline cursor-pointer mx-1">Check</span>,
            <span className="text-orange-600 hover:underline cursor-pointer mx-1">Phone</span>,
            <span className="text-orange-600 hover:underline cursor-pointer mx-1">Time</span>,
            <span className="text-orange-600 hover:underline cursor-pointer mx-1">Hand</span>,
            <span className="text-orange-600 hover:underline cursor-pointer mx-1">XMas</span>,
            <span className="text-orange-600 hover:underline cursor-pointer mx-1">New Year</span>,
            <span className="text-orange-600 hover:underline cursor-pointer mx-1">Party</span>
          </p>
        </div>
      </header>
    </div>
  );
}

export default Hero;
