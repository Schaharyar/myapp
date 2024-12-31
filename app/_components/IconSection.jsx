"use client";
import styles from './ShadcnCarousel.module.css'
import React, { useState, useRef, useEffect } from "react";

function IconSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Carousel for small screens */}
        <div className="lg:hidden">
          <ShadcnCarousel>
            <Card
              iconText="Icon 1"
              tags={["Outline", "Flat", "Gradient"]}
              title="Wired Family"
              description="Decorative icons designed to be fun, expressive, and modern."
              buttonText="Browse icons"
              buttonClass="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600"
            />
            <Card
              iconText="Icon 2"
              tags={["Regular", "Solid"]}
              title="System Family"
              description="Minimalist design for clarity and readability."
              buttonText="Browse icons"
              buttonClass="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600"
            />
            <Card
              iconText="Icon 3"
              tags={["Color", "Black"]}
              title="Doodle Family"
              description="Hand-drawn with a playful, attention-grabbing style."
              buttonText="Coming soon"
              buttonClass="bg-gray-200 text-gray-600 px-4 py-2 rounded-md text-sm cursor-not-allowed"
            />
          </ShadcnCarousel>
        </div>

        {/* Grid for medium and large screens */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            iconText="Icon 1"
            tags={["Outline", "Flat", "Gradient"]}
            title="Wired Family"
            description="Decorative icons designed to be fun, expressive, and modern."
            buttonText="Browse icons"
            buttonClass="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600"
          />
          <Card
            iconText="Icon 2"
            tags={["Regular", "Solid"]}
            title="System Family"
            description="Minimalist design for clarity and readability."
            buttonText="Browse icons"
            buttonClass="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600"
          />
          <Card
            iconText="Icon 3"
            tags={["Color", "Black"]}
            title="Doodle Family"
            description="Hand-drawn with a playful, attention-grabbing style."
            buttonText="Coming soon"
            buttonClass="bg-gray-200 text-gray-600 px-4 py-2 rounded-md text-sm cursor-not-allowed"
          />

        </div>
      </div>
    </section>
  );
}

function ShadcnCarousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const index = Math.round(scrollLeft / containerWidth);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="relative w-full">
      {/* Horizontal scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide"
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 w-[90%] sm:w-[70%] mx-auto"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {React.Children.map(children, (_, index) => (
          <div
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-500 ${
            index === currentIndex ? "dot-active" : "dot-inactive"
          }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

function Card({ iconText, tags, title, description, buttonText, buttonClass }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
      <div className="w-28 h-28 mb-4 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-gray-500 text-2xl">{iconText}</span>
      </div>
      <div className="flex justify-center space-x-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 ${
              tag === "Flat" || tag === "Regular" || tag === "Color"
                ? "bg-green-100 text-green-600"
                : "bg-gray-200 text-gray-600"
            } rounded-full text-sm`}
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-500 mb-1">{tags.includes("Flat") ? "26,500 ICONS" : "COMING SOON"}</p>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button className={buttonClass}>{buttonText}</button>
    </div>
  );
}

export default IconSection;
