"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

function Hero() {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
		// Implement live search logic here
	};

	return (
		<div>
			<header className="text-center pt-52 pb-28 bg-gray-50 shadow-sm">
				<Image
					src="/globe.svg"
					alt="Logo"
					width={200}
					height={200}
					className="cursor-pointer absolute top-[25%] right-[5%] 2xl:block hidden"
				/>
				<Image
					src="/umbrella.svg"
					alt="Logo"
					width={200}
					height={200}
					className="cursor-pointer absolute top-[25%] left-[5%] 2xl:block hidden"
				/>
				<Image
					src="/globe.svg"
					alt="Logo"
					width={150}
					height={150}
					className="cursor-pointer absolute top-[18%] right-[5%] lg:max-xl:block hidden"
				/>
				<Image
					src="/umbrella.svg"
					alt="Logo"
					width={150}
					height={150}
					className="cursor-pointer absolute top-[18%] left-[5%] lg:max-xl:block hidden"
				/>
				<h1 className="text-3xl md:text-5xl font-bold mb-4">
					Access <span className="text-orange-600">27,900+</span> Animated Icons
				</h1>
				<p className="text-md text-center text-gray-900 md:text-xl mb-6 ">
					Rabbector is a growing library full of carefully crafted, high-quality
					static and animated icons you won’t find anywhere else.
				</p>
				<div className="flex justify-center items-center mb-6">
					<input
						type="text"
						placeholder="Search free and premium icons"
						className="w-1/2 px-4 py-2 border rounded-l-md focus:outline-none focus:border-orange-500"
					/>
					<button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600">
						Search
					</button>
				</div>
				<p className="flex flex-wrap justify-center text-gray-600">
					Popular now:
					<span className="text-orange-600 hover:underline cursor-pointer mx-1">
						Social Media
					</span>
					,
					<span className="text-orange-600 hover:underline cursor-pointer mx-1">
						Money
					</span>
					,
					<span className="text-orange-600 hover:underline cursor-pointer mx-1">
						Arrow
					</span>
					,
					<span className="text-orange-600 hover:underline cursor-pointer mx-1">
						People
					</span>
					,
					<span className="text-orange-600 hover:underline cursor-pointer mx-1">
						Check
					</span>
					,
					<span className="text-orange-600 hover:underline cursor-pointer mx-1">
						Phone
					</span>
					,
					<span className="text-orange-600 hover:underline cursor-pointer mx-1">
						Time
					</span>
					,
					<span className="text-orange-600 hover:underline cursor-pointer mx-1">
						Hand
					</span>
					,
					<span className="text-orange-600 hover:underline cursor-pointer mx-1">
						XMas
					</span>
					,
					<span className="text-orange-600 hover:underline cursor-pointer mx-1">
						New Year
					</span>
					,
					<span className="text-orange-600 hover:underline cursor-pointer mx-1">
						Party
					</span>
				</p>
			</header>
		</div>
	);
}

export default Hero;
