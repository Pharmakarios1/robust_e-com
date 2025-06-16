import { BiHome, BiSearch } from "react-icons/bi";
import Account from "./_partials/Account";
import CustomMenu from "@components/CustomMenu";
import { useState } from "react";

import { useNavigate } from "react-router";
import {
  mensHealthCategories,
  womensHealthCategories,
  generalHealthCategories,
  respiratoryCategories,
  travelHealthCategories,
  skinCareCategories,
} from "utils/data";
import { useDispatch } from "react-redux";
import { toggleSearchBox } from "Redux/ui/uiSlice";

const DeskTop = () => {
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [general, setGeneral] = useState(false);
  const [respiratory, setRespiratory] = useState(false);
  const [travel, setTravel] = useState(false);
  const [skin, setSkin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleclick = (category: string, keyword: string) => {
    if (category === "search" || keyword === "") {
      return navigate("/");
    }
    return navigate(`/${category}/${keyword}`);
  };

  return (
    <div className="hidden md:flex items-center justify-between bg-teal-800 text-white py-2 w-full h-10 sticky top-0 left-0 z-50 shadow-2xl lg:px-10">
      <div className="flex gap-2 items-center">
        <div className="hover:bg-teal-600 h-full p-2 cursor-pointer transition-all duration-300">
          <BiHome className="text-2xl" onClick={() => handleclick("/", "")} />
        </div>
        <div className="hover:bg-teal-600 h-full p-2 cursor-pointer transition-all duration-300">
          <BiSearch
            className="text-2xl"
            onClick={() => dispatch(toggleSearchBox())}
          />
        </div>
      </div>
      <CustomMenu className="flex text-sm text-white">
        {/* Men's Health */}
        <CustomMenu.Item
          className="relative hover:bg-teal-600 cursor-pointer transition-all duration-300 flex"
          onMouseEnter={() => setMen(true)}
          onMouseLeave={() => setMen(false)}
        >
          Men <span className="hidden lg:flex">'s Health</span>
          {men && (
            <div className="absolute bg-teal-600 z-50 top-8 right-0 text-white w-52 p-2 rounded-b-md ">
              {mensHealthCategories.map((item) => (
                <div
                  key={item.id}
                  className="hover:bg-teal-900 cursor-pointer transition-all duration-300 p-2 rounded-md"
                  onClick={() => handleclick("men", item.category.toString())} // Using join to ensure correct path
                >
                  {item.category}
                </div>
              ))}
            </div>
          )}
        </CustomMenu.Item>
        {/* Women's Health */}
        <CustomMenu.Item
          className="hover:bg-teal-600 cursor-pointer transition-all duration-300 flex"
          onMouseEnter={() => setWomen(true)}
          onMouseLeave={() => setWomen(false)}
        >
          Women<span className="hidden lg:flex">'s Health</span>
          {women && (
            <div className="absolute bg-teal-600 z-50 top-8  text-white w-52 p-2 rounded-b-md ">
              {womensHealthCategories.map((item) => (
                <div
                  key={item.id}
                  className="hover:bg-teal-900 cursor-pointer transition-all duration-300 p-2 rounded-md"
                  onClick={() => handleclick("women", item.category.toString())}
                >
                  {item.category}
                </div>
              ))}
            </div>
          )}
        </CustomMenu.Item>
        {/* start General Health */}
        <CustomMenu.Item
          className="hover:bg-teal-600 cursor-pointer transition-all duration-300 flex"
          onMouseEnter={() => setGeneral(true)}
          onMouseLeave={() => setGeneral(false)}
        >
          General <span className="hidden lg:flex">Health</span>
          {general && (
            <div className="absolute bg-teal-600 z-50 top-8  text-white w-52 p-2 rounded-b-md ">
              {generalHealthCategories.map((item) => (
                <div
                  key={item.id}
                  className="hover:bg-teal-900 cursor-pointer transition-all duration-300 p-2 rounded-md"
                  onClick={() =>
                    handleclick("generalhealth", item.category.toString())
                  }
                >
                  {item.category}
                </div>
              ))}
            </div>
          )}
        </CustomMenu.Item>
        {/* respiratory Health */}
        <CustomMenu.Item
          className="hover:bg-teal-600 cursor-pointer transition-all duration-300 flex"
          onMouseEnter={() => setRespiratory(true)}
          onMouseLeave={() => setRespiratory(false)}
        >
          Respiratory <span className="hidden lg:flex pl-1"> & Digestive</span>
          {respiratory && (
            <div className="absolute bg-teal-600 z-50 top-8  text-white w-52 p-2 rounded-b-md ">
              {respiratoryCategories.map((item) => (
                <div
                  key={item.id}
                  className="hover:bg-teal-900 cursor-pointer transition-all duration-300 p-2 rounded-md"
                  onClick={() =>
                    handleclick("respiratory", item.category.toString())
                  }
                >
                  {item.category}
                </div>
              ))}
            </div>
          )}
        </CustomMenu.Item>
        {/* travel */}
        <CustomMenu.Item
          className="hover:bg-teal-600 cursor-pointer transition-all duration-300 flex"
          onMouseEnter={() => setTravel(true)}
          onMouseLeave={() => setTravel(false)}
        >
          Travel
          {travel && (
            <div className="absolute bg-teal-600 z-50 top-8  text-white w-52 p-2 rounded-b-md ">
              {travelHealthCategories.map((item) => (
                <div
                  key={item.id}
                  className="hover:bg-teal-900 cursor-pointer transition-all duration-300 p-2 rounded-md"
                  onClick={() =>
                    handleclick("travel", item.category.toString())
                  }
                >
                  {item.category}
                </div>
              ))}
            </div>
          )}
        </CustomMenu.Item>
        {/* Skin Care */}
        <CustomMenu.Item
          className="hover:bg-teal-600 cursor-pointer transition-all duration-300 flex"
          onMouseEnter={() => setSkin(true)}
          onMouseLeave={() => setSkin(false)}
        >
          Skin <span className="hidden lg:flex"> Care</span>
          {skin && (
            <div className="absolute bg-teal-600 z-50 top-8  text-white w-52 p-2 rounded-b-md ">
              {skinCareCategories.map((item) => (
                <div
                  key={item.id}
                  className="hover:bg-teal-900 cursor-pointer transition-all duration-300 p-2 rounded-md"
                  onClick={() =>
                    handleclick("skincare", item.category.toString())
                  }
                >
                  {item.category}
                </div>
              ))}
            </div>
          )}
        </CustomMenu.Item>
      </CustomMenu>
      <Account />
    </div>
  );
};

export default DeskTop;
