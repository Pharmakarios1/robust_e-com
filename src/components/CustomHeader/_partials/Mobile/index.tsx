import { useState } from "react";
import { BiCollapse, BiMenu } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaMortarPestle } from "react-icons/fa6";
import { Link } from "react-router";
import { motion as m } from "framer-motion";

const MobibleNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [general, setGeneral] = useState(false);
  const [respiratory, setRespiratory] = useState(false);
  const [travel, setTravel] = useState(false);
  const [skin, setSkin] = useState(false);
  return (
    <>
      <div className="fixed md:hidden w-full bg-teal-800 top-0  z-100 p-5 ">
        <div className="flex item-center justify-between">
          <div className="cursor-pointer">
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
          </div>
          <Link
            to="/"
            className="text-white text-2xl flex font-semibold items-center gap-1"
          >
            <FaMortarPestle className="" />
            <span>Kairos</span>
          </Link>
          <div className="text-white text-3xl flex items-center gap-1.5">
            <FaUser className="text-2xl cursor-pointer" />
            <span className="relative cursor-pointer">
              <BsCart className="text-2xl " />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
                3
              </span>
            </span>
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
            <div className="bg-white w-64 h-full p-5">
              <div className="space-y-4 mt-20">
                {/* men's health */}
                <div>
                  <div
                    onClick={() => setMen(!men)}
                    className="border-b justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Men's Health <span>{men ? "-" : "+"}</span>
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
                    className="border-b justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Women's Health <span>{women ? "-" : "+"}</span>
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
                    className="border-b justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    General Health <span>{general ? "-" : "+"}</span>
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
                    className="border-b justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Respiratory <span>{respiratory ? "-" : "+"}</span>
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
                    className="border-b justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Travel <span>{travel ? "-" : "+"}</span>
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
                    className="border-b justify-between text-teal-800 text-base font-semibold flex items-center gap-2"
                  >
                    Skin Care <span>{skin ? "-" : "+"}</span>
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
            </div>
          </m.div>
        )}
      </div>
    </>
  );
};
export default MobibleNav;
