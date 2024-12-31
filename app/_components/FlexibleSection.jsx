"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";

// Import animations
import graphicAnimation from "@/public/animations/graphic.json";
import starAnimation from "@/public/animations/star.json";
import capAnimation from "@/public/animations/cap.json";
import circleAnimation from "@/public/animations/circle.json";
import boxesAnimation from "@/public/animations/boxes.json";
import boxes1Animation from "@/public/animations/boxes1.json";
import boxes2Animation from "@/public/animations/boxes2.json";
import circle2Animation from "@/public/animations/circle2.json";

function FlexibleSection() {
  const [hoveredAnimation, setHoveredAnimation] = useState(null);

  const handleMouseEnter = (animationName) => {
    setHoveredAnimation(animationName);
  };

  const handleMouseLeave = () => {
    setHoveredAnimation(null);
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center bg-gray-100 px-8 py-16 overflow-hidden">
{/* Text Section */}
    <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 md:ml-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Flexible
      </h2>
      <p className="text-md md:text-lg text-gray-600 mb-6">
        Because Lordicons are highly versatile, you can use them any way you like—whether static or animated.
      </p>
      <div className="flex flex-col items-center md:items-start">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mb-4">
          Download free!
        </button>
      </div>
    </div>



      {/* Animation Section */}
      <div className="md:w-2/3 flex justify-center relative">
        {/* Main Graphic Animation */}
        <div
          onMouseEnter={() => handleMouseEnter("graphic")}
          onMouseLeave={handleMouseLeave}
        >
          <Lottie
            animationData={graphicAnimation}
            loop={hoveredAnimation === "graphic"}
            className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] mx-auto"
          />
        </div>

        {/* Floating Cap Animation */}
        <div
          className="absolute bottom-[-10%] left-[15%] md:left-[35%] transform -translate-x-1/2"
          onMouseEnter={() => handleMouseEnter("cap")}
          onMouseLeave={handleMouseLeave}
        >
          <Lottie
            animationData={capAnimation}
            loop={hoveredAnimation === "cap"}
            className="w-36 h-36  md:w-48 md:h-48"
          />
        </div>

        {/* Floating Circle Animation */}
        <div
          className="absolute top-[45%] left-[65%] md:left-[59%] md:top-[50%]"
          onMouseEnter={() => handleMouseEnter("circle")}
          onMouseLeave={handleMouseLeave}
        >
          <Lottie
            animationData={circleAnimation}
            loop={hoveredAnimation === "circle"}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 opacity-80"
          />
        </div>

        {/* circle2 */}
        <div
          className="absolute top-[0%] left-[-10%] md:top-[1%] md:left-[20%]"
          onMouseEnter={() => handleMouseEnter("circle2")}
          onMouseLeave={handleMouseLeave}
        >
          <Lottie
            animationData={circle2Animation}
            loop={hoveredAnimation === "circle2"}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-80"
          />
        </div>

        {/* Floating Star Animation */}
        <div
          className="absolute top-[10%] right-[85%] md:top-[10%] md:left-[25%]"
          onMouseEnter={() => handleMouseEnter("star")}
          onMouseLeave={handleMouseLeave}
        >
          <Lottie
            animationData={starAnimation}
            loop={hoveredAnimation === "star"}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-50"
          />
        </div>

        {/* Three Small Boxes Animation */}
        <div
          className="absolute bottom-[5%] right-[1%] md:bottom-[10%] md:right-[30%]"
          onMouseEnter={() => handleMouseEnter("boxes")}
          onMouseLeave={handleMouseLeave}
        >
          <Lottie
            animationData={boxesAnimation}
            loop={hoveredAnimation === "boxes"}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18"
          />
        </div>

        {/* boxes1 */}
        <div
          className="absolute bottom-[5%] left-[98%] md:bottom-[10%] md:left-[70%]"
          onMouseEnter={() => handleMouseEnter("boxes1")}
          onMouseLeave={handleMouseLeave}
        >
          <Lottie
            animationData={boxes1Animation}
            loop={hoveredAnimation === "boxes1"}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18"
          />
        </div>

        {/* boxes2 */}
        <div
          className="absolute top-[51%] left-[77%] md:top-[62%] md:left-[63%]"
          onMouseEnter={() => handleMouseEnter("boxes2")}
          onMouseLeave={handleMouseLeave}
        >
          <Lottie
            animationData={boxes2Animation}
            loop={hoveredAnimation === "boxes2"}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18"
          />
        </div>
      </div>
    </div>
  );
}

export default FlexibleSection;
