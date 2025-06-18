import DesktopFooter from "./DeskTop";
import MobileFooter from "./Mobile";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-teal-800 text-white p-4 ">
        <DesktopFooter />
        <MobileFooter />
      </div>
      <div className="bg-white text-emerald-800 text-center p-4">
        <p className="text-sm">&copy; {currentYear} PharmaCare. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
