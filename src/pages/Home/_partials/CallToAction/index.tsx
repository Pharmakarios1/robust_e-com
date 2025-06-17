import { Button, Input } from "antd";

const CallToAction = () => {
  return (
    <div className="bg-teal-100 text-white p-4 rounded-md">
      <div className="w-[80%] mx-auto bg-teal-800 p-6 rounded-md">
        <div className="flex space-x-20 flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-center md:items-start">
            <h2 className="text-2xl font-bold mb-2">
              Want 10% OFF your first order?
            </h2>
            <p className="text-sm mb-4">
              Join our newsletter and receive an exclusive 10% OFF!
            </p>

            <div className="flex items-start md:items-center gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-teal-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <Button className="ml-2 !bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                Sub
              </Button>
            </div>
          </div>
          <img
            src="/png/hero.png"
            alt=""
            className="h-20 w-54 rounded-md hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
