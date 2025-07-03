import { useState } from "react";
import { BiCollapse, BiMenu, BiSearch, BiUser } from "react-icons/bi";
import { Link } from "react-router";
import { motion as m } from "framer-motion";
import { toggleSearchBox } from "Redux/ui/uiSlice";
import { toggleAccountOpen } from "Redux/ui/accountSlice";
import { CgClose } from "react-icons/cg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

//
import Account from "../DeskTop/_partials/Account";

//redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "Redux/store";
import CartBox from "@components/Cart";

const MobibleNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [general, setGeneral] = useState(false);
  const [respiratory, setRespiratory] = useState(false);
  const [travel, setTravel] = useState(false);
  const [skin, setSkin] = useState(false);
  const dispatch = useDispatch();
  //Redux account State
  const isAccountOpen = useSelector(
    (state: RootState) => state.account.isAccountActive
  );

  return (
    <>
      <div className="fixed md:hidden w-full bg-teal-800 top-0  z-100 p-5 ">
        <div className="flex items-center justify-between">
          {/* menu icon */}
          <div className="flex items-center gap-3 cursor-pointer">
            {isMenuOpen ? (
              <BiCollapse
                className="text-white text-3xl"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <BiMenu
                className="text-white text-3xl"
                onClick={() => setIsMenuOpen(true)}
              />
            )}
            <span onClick={() => dispatch(toggleSearchBox())}>
              <BiSearch className="text-2xl text-white" />
            </span>
          </div>
          {/* logo */}
          <Link
            to="/"
            className="text-white text-2xl flex font-semibold items-center gap-1"
          >
            <span>PharmaCare</span>
          </Link>
          {/* account */}
          <div className="text-white text-3xl flex items-center gap-1.5">
            {isAccountOpen ? (
              <CgClose
                onClick={() => dispatch(toggleAccountOpen())}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiUser
                onClick={() => dispatch(toggleAccountOpen())}
                className="text-2xl cursor-pointer"
              />
            )}
            {isAccountOpen && <Account />}

            <CartBox />
          </div>
        </div>
      </div>
      {/* menu */}
      <div>
        {isMenuOpen && (
          <m.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            exit={{ x: "-100%" }}
            className="fixed top-0 left-0 w-full h-full z-50 md:hidden"
          >
            <div className="bg-white w-64 h-full p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-800 scrollbar-track-transparent">
              <div className="space-y-4 mt-20 pb-2 border-b border-teal-800">
                {/* men's health */}
                <div>
                  <div
                    onClick={() => setMen(!men)}
                    className=" justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Men's Health{" "}
                    <span>{men ? <FaAngleUp /> : <FaAngleDown />}</span>
                  </div>
                  <div>
                    {men && (
                      <ul className="pl-4 mt-2 space-y-1 text-sm">
                        <li>Condoms</li>
                        <li>Erectile Dysfunction</li>
                        <li>Hair Loss</li>
                        <li>Testosterone Boosters</li>
                        <li>Prostate Health</li>
                        <li>Fertility Support</li>
                        <li>Sexual Wellness</li>
                      </ul>
                    )}
                  </div>
                </div>
                {/* women's health */}
                <div>
                  <div
                    onClick={() => setWomen(!women)}
                    className=" justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Women's Health{" "}
                    <span>{women ? <FaAngleUp /> : <FaAngleDown />}</span>
                  </div>
                  <div>
                    {women && (
                      <ul className="pl-4 mt-2 space-y-1 text-sm">
                        <li>Cystitis</li>
                        <li>Contraceptive Pill</li>
                        <li>Menopause Support</li>
                        <li>Pregnancy Support</li>
                        <li>Postpartum Care</li>
                        <li>Periods</li>
                        <li>Weight Loss</li>
                      </ul>
                    )}
                  </div>
                </div>
                {/* general health */}
                <div>
                  <div
                    onClick={() => setGeneral(!general)}
                    className=" justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    General Health{" "}
                    <span>{general ? <FaAngleUp /> : <FaAngleDown />}</span>
                  </div>
                  <div>
                    {general && (
                      <ul className="pl-4 mt-2 space-y-1 text-sm">
                        <li>First Aids</li>
                        <li>Allergy</li>
                        <li>Pain Relief</li>
                        <li>digestive Health</li>
                        <li>Cold & Flu</li>
                        <li>Vitamins & Supplements</li>
                      </ul>
                    )}
                  </div>
                </div>
                {/* respiratory */}
                <div>
                  <div
                    onClick={() => setRespiratory(!respiratory)}
                    className=" justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Respiratory{" "}
                    <span>{respiratory ? <FaAngleUp /> : <FaAngleDown />}</span>
                  </div>
                  <div>
                    {respiratory && (
                      <ul className="pl-4 mt-2 space-y-1 text-sm">
                        <li>Cough Relief</li>
                        <li>Allergy Relief</li>
                        <li>Asthma management</li>
                        <li>Sinus Relief</li>
                        <li>Emphysema</li>
                        <li>Bronchitis</li>
                      </ul>
                    )}
                  </div>
                </div>
                {/* travel */}
                <div>
                  <div
                    onClick={() => setTravel(!travel)}
                    className="justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Travel{" "}
                    <span>{travel ? <FaAngleUp /> : <FaAngleDown />}</span>
                  </div>
                  <div>
                    {travel && (
                      <ul className="pl-4 mt-2 space-y-1 text-sm">
                        <li>Travel Health kits</li>
                        <li>Inset Repellants</li>
                        <li>Motion Sickness</li>
                      </ul>
                    )}
                  </div>
                </div>
                {/* skin care */}
                <div>
                  <div
                    onClick={() => setSkin(!skin)}
                    className=" justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Skin Care{" "}
                    <span>{skin ? <FaAngleUp /> : <FaAngleDown />}</span>
                  </div>
                  <div>
                    {skin && (
                      <ul className="pl-4 mt-2 space-y-1 text-sm">
                        <li>Moisturisers</li>
                        <li>Sunscreens</li>
                        <li>Acne Treatments</li>
                        <li>Anti-Aging</li>
                        <li>Hydration</li>
                        <li>Skin Repair</li>
                        <li>Sunburn Relief</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-0 ">
                {/*About */}
                <div>
                  <Link
                    to="/about"
                    className=" justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    About
                  </Link>
                </div>
                {/* contact */}
                <div>
                  <Link
                    to="/contact"
                    className=" justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Contact Us
                  </Link>
                </div>
                {/* Faqs */}
                <div>
                  <Link
                    to="/faqs"
                    className=" justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Faqs
                  </Link>
                </div>
                {/* loyalty */}
                <div>
                  <Link
                    to="/loyalty"
                    className=" justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Loyalty
                  </Link>
                </div>
                {/* Delivery */}
                <div>
                  <Link
                    to={"/delivery"}
                    className="justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Delivery
                  </Link>
                </div>
                {/* hub */}
                <div>
                  <Link
                    to={"/hub"}
                    className=" justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Hub
                  </Link>
                </div>
                {/* mart */}
                <div>
                  <Link
                    to={"/supermart"}
                    className=" justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Supermart
                  </Link>
                </div>
              </div>
            </div>
          </m.div>
        )}
      </div>
      {/* Cart */}
    </>
  );
};
export default MobibleNav;
