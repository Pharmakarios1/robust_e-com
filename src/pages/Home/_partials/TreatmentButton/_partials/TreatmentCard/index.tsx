import { CiMedicalClipboard } from "react-icons/ci";

import { TfiAngleRight } from "react-icons/tfi";
import { Link } from "react-router";

const TreatmentCard = ({
  icon,
  imgurl,
  conditionName,
}: {
  imgurl?: string;
  conditionName: string;
  icon?: string;
}) => {
  const defaultImg = "/png/hero.png";
  const i = imgurl ? imgurl : defaultImg;
  const defaultIcon = <CiMedicalClipboard className="text-2xl" />;
  return (
    <Link
      to={`/treatments/${conditionName}`.toString()}
      className="flex flex-col  md:w-full  rounded-lg shadow-md hover:shadow-teal-600 transition-shadow  duration-300 "
    >
      <img
        src={i}
        alt={conditionName}
        className="rounded-t-lg w-full h-44  md:flex"
      />
      <div className="cursor-pointer flex items-center justify-between p-2 bg-teal-800 text-white rounded-b-lg  ">
        <p>{icon ? defaultIcon: icon}</p>
        <p className="text-lg font-semibold">{conditionName}</p>
        <TfiAngleRight className="" />
      </div>
    </Link>
  );
};

export default TreatmentCard;
