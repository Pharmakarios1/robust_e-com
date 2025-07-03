import StepComponent from "@components/Step";
import { Button } from "antd";
import { useState } from "react";

const Checkout = () => {
  const [step, setStep] = useState(1); // Step index starts from 0

  return (
    <div className="bg-gray-50">
      <div className="my-20 md:mt-10 w-[90%] mx-auto ">
        {/* steps component */}
        <div className="w-1/2 flex flex-col mx-auto ">
          <StepComponent currentStep={step} />
          <div className="flex justify-between">
            <Button
              type="text"
              onClick={() => setStep((prev) => Math.max(0, prev - 1))}
              className="!text-teal-800 text-sm"
            >
              Previous
            </Button>
            <Button
              type="text"
              onClick={() => setStep((prev) => Math.min(2, prev + 1))}
              className="!text-teal-800 text-sm"
            >
              Next
            </Button>
          </div>
        </div>
        <div className="flex flex-col border-t-[1px] border-teal-400">
          <h1 className="py-5 text-teal-800">CheckOut</h1>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex flex-col h-screen md:w-[70%] bg-teal-400"></div>
            <div className="flex flex-col h-screen md:w-[30%] bg-emerald-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
