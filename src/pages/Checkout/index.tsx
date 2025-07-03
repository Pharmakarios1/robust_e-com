import StepComponent from "@components/Step";
import { Button, Input, Tag } from "antd";
import { useState } from "react";
import { CiCircleAlert } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";

const Checkout = () => {
  const [step, setStep] = useState(1); // Step index starts from 0
  const date = new Date();
  const day = date.getDate() + 3;
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

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
            <div className="flex flex-col gap-5 h-screen md:w-[70%] p-5 items-center ">
              <div className="bg-orange-100 p-2 rounded-md  lg:max-w-[400px]">
                <span className="flex gap-2 items-center bg-gradient-to-r bg-clip-text  text-transparent from-teal-900 to-teal-500 text-[12px]">
                  <span className="relative">
                    <CiCircleAlert className="text-orange-600/60 text-xl" />
                    <div className="absolute w-4 h-4 rounded-full animate-pulse transform translate-x-[1px] -translate-y-4.5 text-black bg-amber-600/40"></div>
                  </span>

                  <span className="flex flex-col">
                    <h1 className="font-bold text-sm">
                      Your booking is on hold
                    </h1>
                    <p className="text-[10px]">
                      We hold your booking until{" "}
                      <Tag className="!bg-orange-400">
                        {" "}
                        {day}-{month}-{year}
                      </Tag>
                      <br></br>if you reserve change, we will get back to you.
                    </p>
                  </span>
                </span>
              </div>
              <div className="border-[1px] shadow-md p-4  rounded-md border-gray-300 w-full ">
                <h1 className="font-bold text-md">Book Information</h1>
                <div className="flex items-center gap-2 bg-green-200 p-2 rounded-md ">
                  <span className="w-3 h-3 rounded-full bg-green-600  flex place-items-center">
                    <GiCheckMark className="text-[10px] text-white" />
                  </span>
                  <p className="text-[10px] pt-2">
                    Congratulations! We have sent you book details to the
                    vehicle owner
                  </p>
                </div>
                <div className="border-t-[1px] border-black/40 mt-5 py-4 gap-2 grid grid-cols-1 md:grid-cols-3">
                  <div className="flex flex-col">
                    <span className="text-[12px] text-gray-600">Full Name</span>
                    <span className="text-[10px]">Blessed Akhigbe</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-gray-600">Email</span>
                    <span className="text-[10px]">
                      Akhigbeblessed@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-gray-600">
                      Phone Number
                    </span>
                    <span className="text-[10px]">+234-8060514714</span>
                  </div>
                </div>
              </div>
              <div className="border-[1px] shadow-md p-4  rounded-md border-gray-300 w-full ">
                <h1 className="font-bold text-md">Payments Details</h1>
                <p className="text-[12px] text-black/50">
                  Fill in the form below. Enter your card account details
                </p>

                <div className="border-t-[1px] border-black/40 mt-5 py-4">
                  <Input />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-screen md:w-[30%] bg-emerald-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
