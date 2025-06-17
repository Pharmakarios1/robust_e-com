import { FaMortarPestle } from "react-icons/fa6";
import {
  GetInTouch,
  LearnMoreFunc,
  PopularTreatments,
  UsefulLinks,
} from "./_partials";

const MobileFooter = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-teal-800 text-white p-4 lg:hidden ">
      <FaMortarPestle className="text-4xl text-teal-500 mb-2" />
      <GetInTouch />
      <LearnMoreFunc />
      <UsefulLinks />
      <PopularTreatments />
    </div>
  );
};

export default MobileFooter;
