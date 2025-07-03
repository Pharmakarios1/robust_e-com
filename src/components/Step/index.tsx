import React from "react";
import { Steps } from "antd";
import "antd/dist/reset.css"; // Or "antd/dist/antd.css" for older versions

const { Step } = Steps;

type StepComponentProps = {
  currentStep: number;
};

const StepComponent: React.FC<StepComponentProps> = ({ currentStep }) => {
  return (
    <div className="flex">
      <Steps current={currentStep} className="!flex !text-red-400">
        <Step title="Personal Details" />
        <Step title="Payment" />
        <Step title="Complete" />
      </Steps>
    </div>
  );
};

export default StepComponent;
