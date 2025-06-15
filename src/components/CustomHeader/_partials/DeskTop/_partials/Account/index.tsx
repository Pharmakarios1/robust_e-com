import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative flex gap-1 items-center text-white justify-center cursor-pointer transition-all duration-300 hover:text-teal-400"
        onMouseOver={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiUser className="text-2xl" />
        <h2 className="text-base">Account</h2>
        <FaAngleDown className="text-lg " />
      </div>
      {isOpen && (
        <div className="absolute top-14 right-7 bg-teal-800 shadow-lg rounded-lg p-4">
          <ul className="space-y-2">
            <li className="text-white hover:text-teal-600 cursor-pointer">
              Profile
            </li>
            <li className="text-white hover:text-teal-600 cursor-pointer">
              Orders
            </li>
            <li className="text-white hover:text-teal-600 cursor-pointer">
              Wishlist
            </li>
            <li className="text-white hover:text-teal-600 cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Account;
