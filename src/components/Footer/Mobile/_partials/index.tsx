
import { useState } from "react";
import { FaEnvelope, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaMessage,
  FaPinterest,
} from "react-icons/fa6";
import { Link } from "react-router";
import { learnMore2, treatments, usefulLinks2 } from "utils/data";

const GetInTouch = () => {
  const getInTouch2 = [
    { content: "020 7112 9014", text: "Phone", icon: <FaPhone /> },

    { content: "07418 310014", text: "Text(SMS)", icon: <FaMessage /> },

    { content: "help@pharmica.co.uk", text: "Email", icon: <FaEnvelope /> },

    {
      content: "We'll call when it suits you best",
      text: "Request a CallBack",
      icon: <FaPhone />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 p-4 bg-teal-700 rounded-lg w-full">
      <h1
        onClick={() => setOpen(!open)}
        className="text-lg  font-semibold border-b-[1px] border-black/20 pb-2 "
      >
        Get in Touch
      </h1>

      {open && (
        <div className="flex flex-col gap-2">
          {getInTouch2.map((item, index) => (
            <div className="flex items-center gap-4" key={index}>
              <div className="text-2xl text-teal-500">{item.icon}</div>
              <div className="mb-1 flex flex-col">
                <strong className="text-sm">{item.text}:</strong>
                <span className="text-sm ">{item.content}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PopularTreatments = () => {
  const [treatmentsOpen, setTreatmentsopen] = useState(false);
  return (
    <div className="flex flex-col gap-2 p-4 bg-teal-700 rounded-lg w-full">
      <h1
        onClick={() => setTreatmentsopen(!treatmentsOpen)}
        className="text-lg  font-semibold border-b-[1px] border-black/20 pb-2 "
      >
        Popular Treatments
      </h1>

      {treatmentsOpen &&
        treatments.slice(0, 6).map((treatment) => (
          <div
            key={treatment.id}
            className="flex items-center justify-between  cursor-pointer  transition-all duration-300"
          >
            <span className="text-sm">{treatment.condition}</span>
          </div>
        ))}
    </div>
  );
};

const LearnMoreFunc = () => {
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);
  return (
    <div className="flex flex-col  gap-2 p-4 bg-teal-700 rounded-lg w-full">
      <h1
        onClick={() => setLearnMoreOpen(!learnMoreOpen)}
        className="text-lg  font-semibold border-b-[1px] border-black/20 pb-2 "
      >
        Learn More
      </h1>

      {learnMoreOpen &&
        learnMore2.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between  cursor-pointer transition-all duration-300"
          >
            <span className="text-sm">{item}</span>
          </div>
        ))}
    </div>
  );
};

const UsefulLinks = () => {
  const [usefulLinksOpen, setUsefulLinksOpen] = useState(true);
  return (
    <div className="flex flex-col gap-2 p-4 bg-teal-700 rounded-lg w-full transition-all duration-3000">
      <h1
        onClick={() => setUsefulLinksOpen(!usefulLinksOpen)}
        className="text-lg  font-semibold border-b-[1px] border-black/20 pb-2 "
      >
        Useful Links
      </h1>

      {usefulLinksOpen &&
        usefulLinks2.slice(0, 6).map((item, index) => (
          <Link
            to={`/useful-links/${item}`}
            key={index}
            className="flex items-center justify-between  cursor-pointer "
          >
            <span className="text-sm">{item}</span>
          </Link>
        ))}
    </div>
  );
};

const MobileSocialLinks = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <p className="text-center">Follow us:</p>
      <div className="border-b border-teal-500 pb-2 ">
        <a
          href="https://www.facebook.com/pharmica.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-300 transition-colors duration-300"
        >
          <FaFacebook className="inline-block mr-2" />
        </a>

        <a
          href="https://www.instagram.com/pharmica_uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-300 transition-colors duration-300 ml-4"
        >
          <FaInstagram className="inline-block mr-2" />
        </a>
        <a
          href="https://twitter.com/pharmica_uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-300 transition-colors duration-300 ml-4"
        >
          <FaTwitter className="inline-block mr-2" />
        </a>
        <a
          href="https://youtube.com/pharmica_uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-300 transition-colors duration-300 ml-4"
        >
          <FaYoutube className="inline-block mr-2" />
        </a>
        <a
          href="https://pinterest.com/pharmica_uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-300 transition-colors duration-300 ml-4"
        >
          <FaPinterest className="inline-block mr-2" />
        </a>
      </div>
      <img src="png/visa.png" alt="" className="w-44 cursor-pointer"/>
    </div>
  );
};
export {
  GetInTouch,
  PopularTreatments,
  LearnMoreFunc,
  UsefulLinks,
  MobileSocialLinks,
};
