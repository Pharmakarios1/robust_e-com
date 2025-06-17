import DesktopFooter from "./DeskTop";
import MobileFooter from "./Mobile";

const Footer = () => {
  return (
    <div className="bg-teal-800 text-white p-4 ">
      <DesktopFooter />
      <MobileFooter />
    </div>
  );
};

export default Footer;
