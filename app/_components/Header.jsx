"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import * as Toast from "@radix-ui/react-toast";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { user, error } = useUser();

  const handleLogout = () => {
    setShowToast(true);
    setTimeout(() => {
      window.location.href = "/api/auth/logout";
    }, 2000);
  };

  if (error) return <div>{error.message}</div>;

  return (
    <Toast.Provider swipeDirection="right" duration={2000}>
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
          <div className="hidden md:flex items-center space-x-8 relative">
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900 font-medium">
              Pricing
            </Link>
            {user ? (
              <div className="relative">
                <Image
                  src={user.picture}
                  alt={user.name}
                  width={30}
                  height={30}
                  className="rounded-full cursor-pointer"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                />
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48">
                    <div className="px-4 py-2 text-gray-700">
                      Welcome, <strong>{user.given_name || user.name}</strong>
                      <p className="text-sm">{user.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/api/auth/login"
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
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
          <div className="md:hidden bg-gray-50 shadow-md pt-28 py-8 px-8 border-b">
            <Link href="/icons" className="block text-gray-700 hover:text-gray-900 font-medium mb-2">
              Icons
            </Link>
            <Link href="/docs" className="block text-gray-700 hover:text-gray-900 font-medium mb-2">
              Docs
            </Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-gray-900 font-medium mb-2">
              Pricing
            </Link>
            {user ? (
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <Image
                    src={user.picture}
                    alt={user.name}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-gray-700">Welcome, <strong>{user.given_name || user.name}</strong></p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-900"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/api/auth/login"
                className="block bg-orange-500 text-white px-4 py-1 mt-12 w-20 rounded hover:bg-orange-600"
              >
                Log in
              </Link>
            )}
          </div>
        )}

        {/* Toast for Logout */}
        <Toast.Root
          open={showToast}
          onOpenChange={setShowToast}
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md"
        >
          <Toast.Title className="font-bold">Success</Toast.Title>
          <Toast.Description>You have successfully logged out!</Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-4 right-4 w-80" />
      </div>
    </Toast.Provider>
  );
};

export default Header;
