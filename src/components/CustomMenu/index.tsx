import { ReactNode } from "react";

// CustomMenu acts like a container
const CustomMenu = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`bg-teal-800 rounded-md shadow-md ${className}`}>
      {children}
    </div>
  );
};

// CustomMenu.Item acts like a clickable option
CustomMenu.Item = ({
  children,
  onMouseEnter,
  onMouseLeave,
  className = "",
}: {
  children: ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`px-4 py-2 text-white rounded ${className}`}
    >
      {children}
    </div>
  );
};

export default CustomMenu;
