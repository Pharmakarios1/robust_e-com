import {
  GetInTouch,
  LearnMoreFunc,
  MobileSocialLinks,
  PopularTreatments,
  UsefulLinks,
} from "./_partials";

const MobileFooter = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-teal-800 text-white p-4 md:hidden ">
      <div className="text-3xl text-teal-400 mb-2">PharmaCare App</div>
      <PopularTreatments />
      <LearnMoreFunc />
      <GetInTouch />
      <UsefulLinks />
      <MobileSocialLinks />
    </div>
  );
};

export default MobileFooter;
