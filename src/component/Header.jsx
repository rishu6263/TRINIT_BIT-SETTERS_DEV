import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const location = useLocation(null);
  const navigate = useNavigate("/");
  function pathMatchRoute(route) {
    if (route === location.pathname) return true;
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://www.svgrepo.com/show/530575/trophy.svg"
            alt=""
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${
                pathMatchRoute("/sign-up") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/sign-up")}
            >
              Sign up
            </li>
            <li
              className={`${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500"
              } cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
