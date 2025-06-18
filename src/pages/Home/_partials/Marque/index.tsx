import Marquee from "react-fast-marquee";
const SponsorsMarque = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4 bg-gradient-to-b from-teal-700 to-teal-900 text-white">
      <p className="text-sm mb-1.5 font-semibold">Proudly sponsored by our partners</p>
      <Marquee speed={20} pauseOnHover autoFill className="ml-4 flex space-x-4 ">
        <img src="png/visa.png" alt="Sponsor 1" className="h-8" />
        <img src="png/hero.png" alt="Sponsor 2" className="h-8" />
        <img src="jpg/bf.jpg" alt="Sponsor 3" className="h-8" />
        <img src="jpg/os.jpg" alt="Sponsor 3" className="h-8" />
        <img src="jpg/uti.jpg" alt="Sponsor 3" className="h-8" />
        <img src="jpg/wg.jpg" alt="Sponsor 3" className="h-8" />
      </Marquee>
    </div>
  );
};

export default SponsorsMarque;
