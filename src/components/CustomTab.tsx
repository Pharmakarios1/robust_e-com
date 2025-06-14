import React from "react";

interface CustomTabProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CustomTab: React.FC<CustomTabProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <li className="list-none border w-32 h-10 rounded-md flex place-items-center justify-center">
      {/* <div className="border w-32 h-10 rounded-md flex place-items-center justify-center"> */}
      <button className={`${className}`} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export default CustomTab;
