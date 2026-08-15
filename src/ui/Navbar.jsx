import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
    // console.log("Logging out...");
  }
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold sm:text-2xl">
            <a href="dashboard">My App</a>
          </h1>
          <ul className="hidden items-center gap-6 md:flex lg:gap-8">
            <li>
              <a href="apply" className=" hover:text-blue-400">
                APPLY
              </a>
            </li>
            <li>
              <a href="application" className=" hover:text-blue-400">
                APPLICATION
              </a>
            </li>
            <li>
              <a href="profile" className=" hover:text-blue-400">
                PROFILE
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
                href="apply"
                className="block rounded-md px-3 py-2 hover:bg-gray-800"
              >
                APPLY
              </a>
            </li>
            <li>
              <a
                href="application"
                className="block rounded-md px-3 py-2 hover:bg-gray-800"
              >
                APPLICATION
              </a>
            </li>
            <li>
              <a
                href="profile"
                className="block rounded-md px-3 py-2 hover:bg-gray-800"
              >
                PROFILE
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
