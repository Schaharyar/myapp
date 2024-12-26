"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <nav className="flex items-center justify-between fixed w-full py-4 px-8 bg-gray-50 border-b shadow-md">
        {/* Left Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/icons" className="text-gray-700 hover:text-gray-900 font-medium">
            Icons
          </Link>
          <Link href="/docs" className="text-gray-700 hover:text-gray-900 font-medium">
            Docs
          </Link>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/lordicon-mobile.svg"
              alt="Logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900 font-medium">
            Pricing
          </Link>
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Image
                  src={user.picture}
                  alt={user.name}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <span className="text-gray-700">{user.email}</span>
              </div>
              <Link href="/api/auth/logout" className="text-gray-700 hover:text-gray-900 font-medium">
                Logout
              </Link>
            </div>
          ) : (
            <Link href="/api/auth/login" className="text-gray-700 hover:text-gray-900 font-medium">
              Log in
            </Link>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 shadow-md py-8 px-8 border-b">
          <Link href="/icons" className="block text-gray-700 hover:text-gray-900 font-medium mb-2">
            Icons
          </Link>
          <Link href="/docs" className="block text-gray-700 hover:text-gray-900 font-medium mb-2">
            Docs
          </Link>
          <Link href="/pricing" className="block text-gray-700 hover:text-gray-900 font-medium mb-2">
            Pricing
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-gray-900 font-medium mb-2">
            About Us
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-gray-900 font-medium mb-2">
            Contact
          </Link>
          <div className="mt-8 gap-4 flex items-center">
            {user ? (
              <>
                <div className="flex items-center space-x-2">
                  <Image
                    src={user.picture}
                    alt={user.name}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span className="text-gray-700">{user.email}</span>
                </div>
                <Link
                  href="/api/auth/logout"
                  className="block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </Link>
              </>
            ) : (
              <Link
                href="/api/auth/login"
                className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Log in
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
