import { Button, Input, Space } from "antd";

const CallToAction = () => {
  return (
    <div className="bg-teal-100 text-white p-4 rounded-md">
      <div className="w-[90%] md:h-60 mx-auto bg-teal-800 p-6 lg:px-10 rounded-md">
        <div className="flex  flex-col md:flex-row md:justify-between items-center h-full ">
          <div className="flex text-center lg:text-start  h-full flex-col  items-center justify-between  text-white">
            <h2 className="text-2xl lg:text-4xl lg:w-80  mb-2">
              Want 10% OFF your first order?
            </h2>
            <p className="text-[13px] mb-4">
              Join our newsletter and receive an exclusive 10% OFF!
            </p>

            <div className="w-full lg:w-80">
              <Space.Compact className="w-full">
                <Input placeholder="Enter your email" size="large" />
                <Button type="primary" size="large">
                  Submit
                </Button>
              </Space.Compact>
            </div>
          </div>
          <img
            src="/png/ctaimg.png"
            alt=""
            className="h-20 w-36 rounded-md hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
