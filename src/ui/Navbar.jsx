import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleLogout() {
    console.log("Logging out...");
  }
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold sm:text-2xl">My App</h1>
          <ul className="hidden items-center gap-6 md:flex lg:gap-8">
            <li>
              <a href="home" className=" hover:text-blue-400">
                HOME
              </a>
            </li>
            <li>
              <a href="product" className=" hover:text-blue-400">
                PRODUCTS
              </a>
            </li>
            <li>
              <a href="about" className=" hover:text-blue-400">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="contact" className=" hover:text-blue-400">
                CONTACT US
              </a>
            </li>
            <li>
              <button
                onClick={() => handleLogout()}
                className="rounded-lg bg-red-600 px-4 py-2  hover:bg-red-700"
              >
                Logout
              </button>
            </li>
          </ul>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 hover:bg-gray-800 md:hidden"
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>
        {isOpen && (
          <ul className="space-y-2 pb-4 md:hidden">
            <li>
              <a
                href="home"
                className="block rounded-md px-3 py-2 hover:bg-gray-800"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="product"
                className="block rounded-md px-3 py-2 hover:bg-gray-800"
              >
                PRODUCTS
              </a>
            </li>
            <li>
              <a
                href="about"
                className="block rounded-md px-3 py-2 hover:bg-gray-800"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="block rounded-md px-3 py-2 hover:bg-gray-800"
              >
                CONTACT US
              </a>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="mt-2 w-full rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700"
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
