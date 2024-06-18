"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary-lighter focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center justify-center sm:justify-start flex-1">
            <div className="flex-shrink-0">
              <Link href="/">
                  <Image
                    src="/avonvale-logo.png"
                    alt="Avonvale Bowls Club Logo"
                    width={64}
                    height={64}
                  />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/fixtures">
                  <h6 className="text-gray-300 hover:bg-primary-lighter hover:text-secondary-vibrant px-3 py-2 rounded-md text-lg font-medium">
                    Fixtures
                  </h6>
                </Link>
                <Link href="/results">
                  <h6 className="text-gray-300 hover:bg-primary-lighter hover:text-secondary-vibrant px-3 py-2 rounded-md text-lg font-medium">
                    Results
                  </h6>
                </Link>
                <Link href="/news">
                  <h6 className="text-gray-300 hover:bg-primary-lighter hover:text-secondary-vibrant px-3 py-2 rounded-md text-lg font-medium">News</h6>
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setMoreMenuOpen(!isMoreMenuOpen)}
                    className="text-gray-300 hover:bg-primary-lighter hover:text-secondary-vibrant px-3 py-2 rounded-md text-lg font-medium"
                  >
                    More
                  </button>
                  {isMoreMenuOpen && (
                    <div className="absolute z-10 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                      <Link href="/option1">
                        <h6 className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">Option 1</h6>
                      </Link>
                      <Link href="/option2">
                        <h6 className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">Option 2</h6>
                      </Link>
                      {/* Add more options as needed */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/fixtures">
              <h6 className="text-gray-300 hover:bg-primary-lighter hover:text-white block px-3 py-2 rounded-md text-base font-medium">Fixtures</h6>
            </Link>
            <Link href="/results">
              <h6 className="text-gray-300 hover:bg-primary-lighter hover:text-white block px-3 py-2 rounded-md text-base font-medium">Results</h6>
            </Link>
            <Link href="/news">
              <h6 className="text-gray-300 hover:bg-primary-lighter hover:text-white block px-3 py-2 rounded-md text-base font-medium">News</h6>
            </Link>
            <div className="relative">
              <button
                onClick={() => setMoreMenuOpen(!isMoreMenuOpen)}
                className="text-gray-300 hover:bg-primary-lighter hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                More
              </button>
              {isMoreMenuOpen && (
                <div className="mt-2 w-full z-10 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  <Link href="/option1">
                    <h6 className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">Option 1</h6>
                  </Link>
                  <Link href="/option2">
                    <h6 className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">Option 2</h6>
                  </Link>
                  {/* Add more options as needed */}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
