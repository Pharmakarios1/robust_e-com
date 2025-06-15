import { BiHome, BiSearch } from "react-icons/bi";
import Account from "./_partials/Account";
import CustomMenu from "@components/CustomMenu";
import { useState } from "react";
import HoverMenu from "@components/CustomMenu/_partials";

const DeskTop = () => {
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [general, setGeneral] = useState(false);
  const [respiratory, setRespiratory] = useState(false);
  const [travel, setTravel] = useState(false);
  const [skin, setSkin] = useState(false);
  const handleclick = (path: string) => {
    if (path === "home") {
      window.location.href = "/";
    } else if (path === "search") {
      window.location.href = "/product";
    }
  };
  return (
    <div className="hidden md:flex items-center justify-between bg-teal-800 text-white py-2 w-full h-10 sticky top-0 left-0 z-50 shadow-2xl lg:px-10">
      <div className="flex gap-2 items-center">
        <div className="hover:bg-teal-600 h-full p-2 cursor-pointer transition-all duration-300">
          <BiHome className="text-2xl" onClick={() => handleclick("home")} />
        </div>
        <div className="hover:bg-teal-600 h-full p-2 cursor-pointer transition-all duration-300">
          <BiSearch
            className="text-2xl"
            onClick={() => handleclick("search")}
          />
        </div>
      </div>
      <CustomMenu className="flex text-sm text-white">
        <CustomMenu.Item
          className="relative hover:bg-teal-600 cursor-pointer transition-all duration-300 flex"
          onMouseEnter={() => setMen(true)}
          onMouseLeave={() => setMen(false)}
        >
          Men <span className="hidden lg:flex">'s Health</span>
          {men && (
            <HoverMenu>
              <HoverMenu.Item
                className="hover:bg-teal-600 cursor-pointer transition-all duration-300"
                onClick={() => handleclick("search")}
              >
                Condoms
              </HoverMenu.Item>
            </HoverMenu>
          )}
        </CustomMenu.Item>
        <CustomMenu.Item
          className="hover:bg-teal-600 cursor-pointer transition-all duration-300 flex"
          onMouseEnter={() => setWomen(true)}
          onMouseLeave={() => setWomen(false)}
        >
          Women<span className="hidden lg:flex">'s Health</span>
          {women && (
            <HoverMenu>
              <HoverMenu.Item
                className="hover:bg-teal-600  cursor-pointer transition-all duration-300"
                onClick={() => handleclick("search")}
              >
                Fertility
              </HoverMenu.Item>
            </HoverMenu>
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
            <HoverMenu>
              <HoverMenu.Item
                className="hover:bg-teal-600 cursor-pointer transition-all duration-300"
                onClick={() => handleclick("search")}
              >
                First Aid
              </HoverMenu.Item>
              <HoverMenu.Item
                className="hover:bg-teal-600 cursor-pointer transition-all duration-300"
                onClick={() => handleclick("search")}
              >
                Pain Relief
              </HoverMenu.Item>
            </HoverMenu>
          )}
        </CustomMenu.Item>
        <CustomMenu.Item
          className="hover:bg-teal-600 cursor-pointer transition-all duration-300 flex"
          onMouseEnter={() => setRespiratory(true)}
          onMouseLeave={() => setRespiratory(false)}
        >
          Respiratory <span className="hidden lg:flex pl-1"> & Digestive</span>
          {respiratory && (
            <HoverMenu>
              <HoverMenu.Item
                className="hover:bg-teal-600 cursor-pointer transition-all duration-300"
                onClick={() => handleclick("search")}
              >
                Cough Relief
              </HoverMenu.Item>
              <HoverMenu.Item
                className="hover:bg-teal-600 cursor-pointer transition-all duration-300"
                onClick={() => handleclick("search")}
              >
                Allergy Relief
              </HoverMenu.Item>
            </HoverMenu>
          )}
        </CustomMenu.Item>
        <CustomMenu.Item
          className="hover:bg-teal-600 cursor-pointer transition-all duration-300 flex"
          onMouseEnter={() => setTravel(true)}
          onMouseLeave={() => setTravel(false)}
        >
          Travel
          {travel && (
            <HoverMenu>
              <HoverMenu.Item
                className="hover:bg-teal-600 cursor-pointer transition-all duration-300"
                onClick={() => handleclick("search")}
              >
                First Aid
              </HoverMenu.Item>
              <HoverMenu.Item
                className="hover:bg-teal-600 cursor-pointer transition-all duration-300"
                onClick={() => handleclick("search")}
              >
                Pain Relief
              </HoverMenu.Item>
            </HoverMenu>
          )}
        </CustomMenu.Item>
        <CustomMenu.Item
          className="hover:bg-teal-600 cursor-pointer transition-all duration-300 flex"
          onMouseEnter={() => setSkin(true)}
          onMouseLeave={() => setSkin(false)}
        >
          Skin <span className="hidden lg:flex"> Care</span>
          {skin && (
            <HoverMenu>
              <HoverMenu.Item
                className="hover:bg-teal-600 cursor-pointer transition-all duration-300"
                onClick={() => handleclick("search")}
              >
                Sunscreen
              </HoverMenu.Item>
              <HoverMenu.Item
                className="hover:bg-teal-600 cursor-pointer transition-all duration-300"
                onClick={() => handleclick("search")}
              >
                Moisturizers
              </HoverMenu.Item>
            </HoverMenu>
          )}
        </CustomMenu.Item>
      </CustomMenu>
      <Account />
    </div>
  );
};

export default DeskTop;
