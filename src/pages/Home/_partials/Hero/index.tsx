import { InputRef } from "antd";
import { useEffect, useRef } from "react";
import { BiCheck } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import heroImg from "/png/hero.png";
import { useSelector } from "react-redux";
import { RootState } from "Redux/store";
import CustomSearch from "@components/CustomSearch";

const Hero = () => {
  const isActive = useSelector(
    (state: RootState) => state.ui.isSearchBoxActive
  );
  const inputRef = useRef<InputRef>(null);
  useEffect(() => {
    if (isActive) {
      inputRef.current?.focus();
    }
  }, [inputRef.current]);
  return (
    <div className="bg-[#00a293] " id="hero">
      <div className="w-[95%] md:w-full  mx-auto flex items-center flex-col lg:flex-row ">
        {/* text container */}
        <div className="container pt-28 md:pl-10 md:pt-10 ">
          <h1 className="text-3xl w-full md:text-4xl  font-bold text-white text-center lg:text-left">
            The 9ja’s trusted online pharmacy
          </h1>
          <p className="mt-4  text-base md:text-lg text-white text-center lg:text-left">
            Rated 'exceptional' and trusted by more than 1.65 million customers
          </p>

          {
            <div className="mt-12 flex justify-center lg:justify-start w-full h-16 ">
              <CustomSearch ref={inputRef} className="!w-w[300px] md:!w-full" />
            </div>
          }
          <div className="grid sm:grid-cols-2 w-full mt-4 gap-4 place-content-center">
            <div className="flex flex-col justify-center  text-white p-1 rounded-lg shadow-md max-w-[250px]">
              <span className="flex items-center gap-1.5">
                <BiCheck className="text-teal-200" />{" "}
                <p className="text-sm md:text-base">
                  9ja's registered pharmacy
                </p>
              </span>
              <span className="flex items-center gap-1.5">
                <BiCheck className="text-teal-200" />{" "}
                <p className="text-sm md:text-base">Discreet packaging</p>
              </span>
            </div>
            <div className="flex flex-col justify-center text-white p-1 rounded-lg shadow-md max-w-[250px]">
              <span className="flex items-center gap-1.5">
                <BiCheck className="text-teal-200" />{" "}
                <p className="text-sm md:text-base">
                  Express next day delivery
                </p>
              </span>
              <span className="flex items-center gap-1.5">
                <BiCheck className="text-teal-200" />{" "}
                <p className="text-sm md:text-base">221,499 customer reviews</p>
              </span>
            </div>
          </div>
          <div className="px-6 py-10  text-white flex items-center justify-between w-full  animate-pulse ">
            <div className="md:pr-8">
              <p className="text-sm md:text-lg font-semibold">
                We are rated 4.9 out of 5
              </p>
              <p className="text-sm">Based on 221,442 reviews</p>
              <div className="flex items-center gap-1 mt-2">
                <BsStars />
                <BsStars />
                <BsStars />
                <BsStars />
                <BsStars />
              </div>
            </div>
            <div>
              <p className="text-sm md:text-lg font-semibold">
                We are rated 4.9 out of 5
              </p>
              <p className="text-sm">Feefo & TrustPilot</p>
              <div className="flex items-center gap-1 mt-2">
                <MdStars className="text-orange-300" />
                <MdStars className="text-orange-300" />
                <MdStars className="text-orange-300" />
                <MdStars className="text-orange-300" />
                <MdStars className="text-orange-300" />
              </div>
            </div>
          </div>
        </div>
        {/* img container */}
        <div className=" md:flex container">
          <img
            src={heroImg}
            alt="hero image"
            className=" h-full w-full bg-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
