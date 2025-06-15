import { ReactNode } from "react";

const HoverMenu = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`absolute top-8 right-7 bg-teal-600 shadow-lg rounded-lg p-4 ${className} w-full md:w-64 lg:w-72 xl:w-80`}
    >
      {children}
    </div>
  );
};
HoverMenu.Item = ({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 text-white rounded cursor-pointer hover:bg-teal-600 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
export default HoverMenu;
