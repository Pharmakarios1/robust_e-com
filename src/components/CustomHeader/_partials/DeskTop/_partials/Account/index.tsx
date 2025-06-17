import CustomMenu from "@components/CustomMenu";
import { RootState } from "Redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const [profile, setProfile] = useState(false);
  //Redux state
  const isAccountOpn = useSelector(
    (state: RootState) => state.account.isAccountActive
  );
  return (
    <>
      {isAccountOpn && (
        <CustomMenu className="absolute top-16 md:top-10 right-10 bg-teal-800 md:bg-teal-600 shadow-lg rounded-lg p-4">
          <CustomMenu.Item
            className="relative  text-sm md:text-base hover:bg-teal-600 md:hover:bg-teal-800 cursor-pointer transition-all duration-300 flex"
            onMouseEnter={() => setProfile(true)}
            onMouseLeave={() => setProfile(false)}
          >
            {profile ? "Profile" : "Profile"}
          </CustomMenu.Item>
          <CustomMenu.Item
            className="relative text-sm md:text-base hover:bg-teal-600 md:hover:bg-teal-800 cursor-pointer transition-all duration-300 flex"
            onMouseEnter={() => setProfile(true)}
            onMouseLeave={() => setProfile(false)}
          >
            Order
          </CustomMenu.Item>
          <CustomMenu.Item
            className="relative  text-sm md:text-base hover:bg-teal-600 md:hover:bg-teal-800 cursor-pointer transition-all duration-300 flex"
            onMouseEnter={() => setProfile(true)}
            onMouseLeave={() => setProfile(false)}
          >
            Points
          </CustomMenu.Item>
          <CustomMenu.Item
            className="relative  text-sm md:text-base hover:bg-teal-600 md:hover:bg-teal-800 cursor-pointer transition-all duration-300 flex"
            onMouseEnter={() => setProfile(true)}
            onMouseLeave={() => setProfile(false)}
          >
            My Promotions
          </CustomMenu.Item>
        </CustomMenu>
      )}
    </>
  );
};

export default Account;
