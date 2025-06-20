import CustomSearch from "@components/CustomSearch";
import { useEffect, useRef } from "react";
import { InputRef } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "Redux/store";


const Treatment = () => {
  const isActive = useSelector(
    (state: RootState) => state.ui.isSearchBoxActive
  );
  const inputRef = useRef<InputRef>(null);
  

  useEffect(() => {
    if (isActive) {
      inputRef.current?.focus();
    }
  }, [isActive]); // Changed dependency to isActive

  

  return (
    <div
      className="w-[80%] mx-auto flex flex-col justify-center"
    
    >
      <div className="flex flex-col justify-center mt-20">
        <h1 className="text-2xl font-bold text-center mb-5">Treatment Page</h1>
        <CustomSearch ref={inputRef} className="!w-full" />
      </div>
      <div>
        <p className="text-center mt-4">
          This is the treatment page where you can find various treatments.
        </p>
      </div>
    </div>
  );
};

export default Treatment;
