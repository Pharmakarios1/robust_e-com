import { ReactNode } from "react";

const HoverMenu = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`absolute bg-amber-500 ${className}`}>{children}</div>;
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
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};
export default HoverMenu;
