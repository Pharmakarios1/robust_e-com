import { Modal } from "antd";
import { ReactNode } from "react";

const CustomModal = ({
  children,
  ...props
}: {
  children: ReactNode;
  props: string;
}) => {
  return;
  <Modal className={`${props}`}>{children}</Modal>;
};

export default CustomModal;
