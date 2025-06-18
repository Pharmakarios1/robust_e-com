//third party imports

import { useState } from "react";
import { BiStar } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaBuysellads, FaMortarPestle } from "react-icons/fa";
import { MdLoyalty } from "react-icons/md";
import { SiHubspot } from "react-icons/si";
import { Link } from "react-router";
import { m } from "framer-motion";

const Ads = () => {
  const [menu, setMenu] = useState("review");

  return (
    <div className="hidden md:flex bg-gray-200 h-20 w-full items-center justify-between lg:px-10 shadow-md">
      <h2 className="text-5xl font-semibold text-teal-800 flex items-center gap-1">
        <FaMortarPestle className="text-[43px]" /> PharmaCare
      </h2>
      <m.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:flex"
      ></m.div>
      <div className="flex flex-col items-center justify-between gap-4">
        <div className="flex gap-4  bg-teal-800 text-sm text-white px-4 py-2 rounded-b-2xl min-w-[350px] position top-0 right-20">
          <Link to="/page1" className=" hover:text-teal-600">
            About
          </Link>
          <Link to="/page2" className=" hover:text-teal-600">
            Contact Us
          </Link>
          <Link to="/page3" className=" hover:text-teal-600">
            Faqs
          </Link>
          <Link to="/mail" className=" hover:text-teal-600">
            Mail
          </Link>
          <Link to="/number" className=" hover:text-teal-600">
            08060514714
          </Link>
        </div>
        <div className="text-[12px] flex gap-2 items-center justify-center mb-2 border-[1px] border-teal-800 rounded-md p-1 bg-white">
          <Link
            onClick={() => setMenu("review")}
            to="/review"
            className={`flex items-center gap-1 p-[2px] rounded-md ${
              menu === "review"
                ? "hover:bg-teal-800 bg-teal-800 text-white hover:text-white transition-all duration-300"
                : ""
            }`}
          >
            <BiStar className="text-xl text-yellow-600" />
            <span className="">414,222</span>Reviews
          </Link>
          <Link
            onClick={() => setMenu("loyalty")}
            to="/loyalty"
            className={`flex items-center gap-1 p-[2px] rounded-md ${
              menu === "loyalty"
                ? "hover:bg-teal-800 bg-teal-800 text-white hover:text-white transition-all duration-300"
                : ""
            }`}
          >
            <MdLoyalty className="text-xl text-teal-600" />
            Loyalty
          </Link>
          <Link
            onClick={() => setMenu("delivery")}
            to="/delivery"
            className={`flex items-center gap-1 p-[2px] rounded-md ${
              menu === "delivery"
                ? "hover:bg-teal-800 bg-teal-800 text-white hover:text-white transition-all duration-300"
                : ""
            }`}
          >
            <CiDeliveryTruck className="text-xl text-teal-600 " />
            Delivery
          </Link>
          <Link
            onClick={() => setMenu("supermart")}
            to="/supermart"
            className={`flex items-center gap-1 p-[2px] rounded-md ${
              menu === "supermart"
                ? "hover:bg-teal-800 bg-teal-800 text-white hover:text-white transition-all duration-300"
                : ""
            }`}
          >
            <FaBuysellads className="text-xl text-teal-700 hover:text-white" />
            Supermart
          </Link>
          <Link
            onClick={() => setMenu("blog")}
            to="/blog"
            className={`flex items-center gap-1 p-[2px] rounded-md ${
              menu === "blog"
                ? "hover:bg-teal-800 bg-teal-800 text-white hover:text-white transition-all duration-300"
                : ""
            }`}
          >
            <SiHubspot className="text-xl text-teal-700 hover:text-white " />
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ads;
