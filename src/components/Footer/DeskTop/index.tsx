import { FaEnvelope, FaPhone } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaMessage,
  FaMortarPestle,
  FaPinterest,
  FaX,
  FaYoutube,
} from "react-icons/fa6";

import { treatments } from "utils/data";

const learnMore = [
  "How it Works",
  "About Us",
  "FAQs",
  "Health Hub",
  "Work for Us",
  "Delivery Information",
];
const usefulLinks = [
  " Contact Us",
  " Reviews",
  " Loyalty Program",
  " Promotions",
  " Refer a Friend",
];
const getInTouch = [
  { content: "020 7112 9014", text: "Phone", icon: <FaPhone /> },

  { content: "07418 310014", text: "Text(SMS)", icon: <FaMessage /> },

  { content: "help@pharmica.co.uk", text: "Email", icon: <FaEnvelope /> },

  {
    content: "We'll call when it suits you best",
    text: "Request a CallBack",
    icon: <FaPhone />,
  },
];
const DesktopFooter = () => {
  return (
    <div className="hidden  w-[90%] my-10 mx-auto lg:grid grid-cols-[2fr_3fr]">
      <div className="flex flex-col justify-between gap-4  pr-4">
        <div>
          <div className="flex items-center gap-2 border-b-[1px] border-white w-54 pb-6">
            <FaMortarPestle className="text-3xl" />
            <h1 className="text-4xl font-semibold ">kairos App</h1>
          </div>
          <ul className="flex flex-col gap-4 text-sm items-start ">
            <li className="flex items-center justify-center gap-1">
              <FaFacebook /> Follow us on Facebook
            </li>
            <li className="flex items-center justify-center gap-1">
              <FaInstagram /> Follow us on Instagram
            </li>
            <li className="flex items-center justify-center gap-1">
              <FaYoutube /> Follow us on youtube
            </li>
            <li className="flex items-center justify-center gap-1">
              <FaX /> Follow us on X
            </li>
            <li className="flex items-center justify-center gap-1">
              <FaPinterest /> Follow us on Pinterest
            </li>
          </ul>
        </div>
        <div className="flex gap-3 text-sm items-center justify-between">
          <img src="/hero.png" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="grid grid-rows-2 gap-4 p-4 ">
          <div className="flex flex-col gap-2 p-4 bg-teal-700 rounded-lg w-full">
            <h1 className="text-lg  font-semibold border-b-[1px] border-black/20 pb-2 ">
              Popular Treatments
            </h1>

            {treatments.slice(0, 6).map((treatment) => (
              <div
                key={treatment.id}
                className="flex items-center justify-between  cursor-pointer  transition-all duration-300"
              >
                <span className="text-sm">{treatment.condition}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col  gap-2 p-4 bg-teal-700 rounded-lg w-full">
            <h1 className="text-lg  font-semibold border-b-[1px] border-black/20 pb-2 ">
              Learn More
            </h1>

            {learnMore.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between  cursor-pointer transition-all duration-300"
              >
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 bg-teal-700 rounded-lg ">
          <div className="flex flex-col gap-2 p-4  rounded-lg w-full">
            <h1 className="text-lg  font-semibold border-b-[1px] border-black/20 pb-2 ">
              Learn More
            </h1>

            {usefulLinks.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between  cursor-pointer transition-all duration-300"
              >
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-lg w-full">
            <h1 className="text-lg  font-semibold border-b-[1px] border-black/20 pb-2 ">
              Learn More
            </h1>

            {getInTouch.map((item, index) => (
              <div className="flex items-center gap-4" key={index}>
                <div className="text-2xl text-teal-500">{item.icon}</div>
                <div className="mb-1 flex flex-col">
                  <strong className="text-sm">{item.text}:</strong>
                  <span className="text-sm ">{item.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
