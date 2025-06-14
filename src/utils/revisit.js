import CustomTab from "@components/CustomTab";
import { useState } from "react";
import DataExample from "data";

// const tabClick = "clicked";
const Utils = () => {
  const [tabClick, setTabClick] = useState("component");
  const handleClick = (tab: string) => {
    setTabClick(tab);
    console.log(tab);
  };
  return (
    <>
      <div className="flex  gap-2">
        <CustomTab onClick={() => handleClick("component")}>
          component
        </CustomTab>
        <CustomTab onClick={() => handleClick("jxs")}>jsx</CustomTab>
        <CustomTab onClick={() => handleClick("props")}>props</CustomTab>
        <CustomTab onClick={() => handleClick("state")}>state</CustomTab>
      </div>
      <div>
        {/* {tabClick === "component" && (
          <div className="flex flex-col gap-2">
            {DataExample.map((item, index) => (
              <div
                key={index}
                className="border w-32 h-10 rounded-md flex place-items-center justify-center"
              >
                {item.component?.name}
              </div>
            ))}
          </div>
        )} */}
        {tabClick}
      </div>
    </>
  );
};

export default Utils;
