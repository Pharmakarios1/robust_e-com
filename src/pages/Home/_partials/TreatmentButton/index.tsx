import { useState } from "react";
import { treatments } from "utils/data";
import TreatmentCard from "./_partials/TreatmentCard";
import { Spin } from "antd";

const TreatmentWrapper = () => {
  // State to manage active category and selected treatment
  const [active, setActive] = useState<string>("Popular");
  const [selectedCategory, setSelectedCategory] = useState("All Treatments");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadmore, setLoadmore] = useState<number>(8);

  const filtered =
    selectedCategory === "All Treatments"
      ? treatments
      : treatments.filter((item) => item.category === selectedCategory);

  // Function to handle click on treatment category
  const handleClick = (treatment: string) => {
    setSelectedCategory(treatment);
    setActive(treatment);
  };
  // Function to handle load more functionality
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoadmore((prev) => prev + 2);
      setLoading(false);
    }, 300);
  };
  return (
    <div className="w-[90%]  mx-auto mt-8">
      <div className="flex flex-col items-center justify-center text-center">
        <div>
          <h2 className="text-2xl mb-4 md:text-4xl font-bold text-teal-800">
            Find your treatment
          </h2>
          <p className="hidden md:block">
            At Pharmica we offer a wide range of treatments through our free
            online prescription service. The service is safe, discreet and
            convenient, with all medicines dispensed from our renowned Central
            London based, GPhC registered online pharmacy for same-day or
            express nationwide delivery.
          </p>
        </div>
        <div className="my-4">
          {/* btn control */}
          <div className="flex gap-2 mt-1 cursor-pointer flex-wrap justify-center transition-all duration-300 ">
            <div
              className={`border-2 p-1  rounded-md text-teal-800 border-teal-800 w-20 md:w-32 hidden lg:block ${
                active === "All Treatments" ? "bg-teal-800 text-white" : ""
              }`}
              onClick={() => handleClick("All Treatments")}
            >
              <span className=" text-nowrap">All Treatments</span>
            </div>
            <div
              onClick={() => handleClick("Popular")}
              className={
                "border-2 text-teal-800 p-1 rounded-md border-teal-800 w-20 md:w-32 " +
                (active === "Popular" ? "bg-teal-800 text-white" : "")
              }
            >
              <span className="text-nowrap">Popular</span>
            </div>
            <div
              className={`border-2 p-1 rounded-md text-teal-800  border-teal-800 w-20 md:w-32  ${
                active === "Men's" ? "bg-teal-800 text-white" : ""
              }`}
              onClick={() => handleClick("Men's")}
            >
              <span className="">Men's </span>
            </div>
            <div
              className={`border-2 p-1 rounded-md text-teal-800  border-teal-800 w-20 md:w-32  ${
                active === "Women's" ? "bg-teal-800 text-white" : ""
              }`}
              onClick={() => handleClick("Women's")}
            >
              <span className="">Women's </span>
            </div>
            <div
              onClick={() => handleClick("Respiratory")}
              className={`border-2 p-1 rounded-md text-teal-800 hidden md:block border-teal-800 w-20 md:w-32  ${
                active === "Respiratory" ? "bg-teal-800 text-white" : ""
              }`}
            >
              <span className=""> Respiratory</span>
            </div>
            <div
              onClick={() => handleClick("Sexual")}
              className={`border-2 p-1 rounded-md text-teal-800 border-teal-800 w-20 md:w-32 hidden lg:block ${
                active === "Sexual" ? "bg-teal-800 text-white" : ""
              }`}
            >
              <span className="">Sexual</span>
            </div>
            <div
              onClick={() => handleClick("Others")}
              className={`border-2 p-1 rounded-md text-teal-800 border-teal-800 w-20 md:w-32 md lg:block ${
                active === "Others" ? "bg-teal-800 text-white" : ""
              }`}
            >
              <span className="">Others</span>
            </div>
          </div>
          {/* ui rendering */}
          <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.slice(0, loadmore).map((item) => (
              <TreatmentCard
                key={item.id}
                imgurl={item.imgurl}
                conditionName={item.condition}
                icon={item.icon}
              />
            ))}
          </div>
          {/* loading spinner */}
          {loading && (
            <div className="mt-4 text-sm text-gray-500">
              <Spin />
            </div>
          )}
          {/* Load more button */}
          {!loading && loadmore < filtered.length && (
            <button
              className="bg-teal-800 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors duration-300"
              onClick={handleLoadMore}
              disabled={loading}
            >
              LoadMore
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreatmentWrapper;
