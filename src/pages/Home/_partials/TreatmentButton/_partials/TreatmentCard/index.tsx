import { BiFace } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router";

const TreatmentCard = ({
  imgurl,
  conditionName,
}: {
  imgurl?: string;
  conditionName: string;
  icon?: string;
}) => {
  const defaultImg = "/png/hero.png";
  const i = imgurl ? imgurl : defaultImg;
  const defaultIcon = <BiFace />;
  return (
    <div className="flex flex-col  md:w-full  rounded-lg shadow-md hover:shadow-lg transition-shadow  duration-300 ">
      <img
        src={i}
        alt={conditionName}
        className="rounded-t-lg w-full h-36  md:flex"
      />
      <Link
        to={`/treatments/${conditionName}`.toString()}
        className="cursor-pointer flex items-center justify-between p-1 bg-teal-800 text-white rounded-b-lg  "
      >
        {defaultIcon ? defaultIcon : <BiFace className="text-2xl" />}
        <h3 className="text-lg font-semibold mt-2">{conditionName}</h3>
        <FaAngleRight className="text-2xl" />
      </Link>
    </div>
  );
};

export default TreatmentCard;
