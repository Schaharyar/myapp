"use client";
import React, { useState } from "react";

function CategorySection() {
  const [selectedFamily, setSelectedFamily] = useState("Wired Family");

  const categories = [
    { name: "Alert", icon: "🔔" },
    { name: "Arrows", icon: "➡️" },
    { name: "Communication", icon: "📞" },
    { name: "Device", icon: "💻" },
    { name: "Editor", icon: "✏️" },
    { name: "File", icon: "📁" },
    { name: "Finance", icon: "💳" },
    { name: "Interface", icon: "⚙️" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Wide range of categories</h2>
        {/* Family Selector */}
<div className="inline-flex justify-center space-x-3 border-[1px] border-gray-400 rounded-full p-1 bg-white mb-4">
<button
  onClick={() => setSelectedFamily("Wired Family")}
  className={`py-1 px-10 md:px-24 rounded-full text-sm ${
    selectedFamily === "Wired Family"
      ? "bg-green-100 text-green-600"
      : " text-gray-600"
  } hover:text-green-600 transition-colors duration-300`}
>
  Wired Family
</button>
<button
  onClick={() => setSelectedFamily("System Family")}
  className={`py-1 px-10 md:px-24 rounded-full text-sm ${
    selectedFamily === "System Family"
      ? "bg-green-100 text-green-600"
      : " text-gray-600"
  } hover:text-green-600 transition-colors duration-300`}
>
  System Family
</button>

</div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4 text-lg bg-gray-50 rounded-full">
                {category.icon}
              </div>
              <p className="text-sm font-medium text-gray-700">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
