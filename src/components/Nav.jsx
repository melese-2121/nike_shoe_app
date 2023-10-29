import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import React, { useState, useRef, useEffect } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between max-sm:pl-5 pl-10  xl:pt-10 pt-5">
      <a href="/" className=" w-2/3">
        <img src={headerLogo} alt="logo" width="150px" height="100px" />
      </a>
      <ul className="flex w-3/4 justify-around max-sm:hidden">
        {navLinks.map((item) => {
          return (
            <li
              key={item.href}
              className="text-zinc-400 hover:text-zinc-800 font-momo font-bold"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          );
        })}
      </ul>
      <img
        className=" max-sm:block hidden max-sm:mr-5 mr-10 hover:cursor-pointer"
        src={hamburger}
        alt="menu"
        width="22px"
        height="10px"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div
          ref={dropdownRef}
          className="origin-top-right absolute right-0 mt-1 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 py-3"
        >
          {navLinks.map((item) => {
            return (
              <div
                key={item.href}
                className=" flex items-start gap-x-3  px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-80"
              >
                {item.label === "Home" ? (
                  <AiOutlineHome className="text-green-600 text-xl" />
                ) : (
                  ""
                )}
                {item.label === "About Us" ? (
                  <BsInfoCircle className="text-green-600 text-xl" />
                ) : (
                  ""
                )}
                {item.label === "Products" ? (
                  <MdProductionQuantityLimits className="text-green-600 text-xl" />
                ) : (
                  ""
                )}
                {item.label === "Contact Us" ? (
                  <RiContactsLine className="text-green-600 text-xl" />
                ) : (
                  ""
                )}

                <a href={item.href} className="text-[16px] font-serif">
                  {item.label}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Nav;
