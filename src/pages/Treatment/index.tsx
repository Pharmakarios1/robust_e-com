import { Button } from "antd";
import { TfiAngleRight } from "react-icons/tfi";
import { Link, useParams } from "react-router";
import { treatments } from "utils/data";

const Treatment = () => {
  const { slug } = useParams();

  // Optionally fetch more data using slug or filter from static data
  // const treatment = treatments.find((t) => t.slug === slug);
  const treatment = treatments.find((treatment) => treatment.slug === slug);
  if (!treatment) return <p>Treatment not found</p>;

  const defaultImg = "/png/hero.png";

  return (
    <div className=" bg-teal-100  pt-12">
      <div className="w-[90%] mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex pt-12 md:pt-4 p-4 flex-col-reverse md:flex-row gap-4">
          <img
            src={treatment.imgurl || "/png/hero.png"}
            alt={treatment.condition}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="flex flex-col justify-center md:justify-start">
            <h1 className="text-3xl font-bold">{treatment.condition}</h1>
            <p className="text-gray-400 text-sm md:text-xl pb-3">
              {treatment.tag}
            </p>

            <Button className="!bg-orange-500" size="large" type="primary">
              Consult with a Specialist
            </Button>
            <p className="text-sm md:text-base pt-3">{treatment.description}</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Available Treatments</h2>
          <ul className="list-disc grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {treatment.products.map((item, index) => {
              // const slug = item.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  to={`/treatments/${treatment.slug}/${item.slug}`}
                  key={index}
                  className="text-sm md:text-base list-none"
                >
                  <div className="relative flex flex-col  md:w-full  rounded-lg shadow-md hover:shadow-teal-600 transition-shadow  duration-300 ">
                    <img
                      src={item?.imgurl ? item.imgurl : defaultImg}
                      alt={item.name}
                      className="rounded-t-lg w-full h-44  md:flex"
                    />
                    <div className="absolute bottom-10 right-0 m-2 inset-0">
                      <p className="text-teal-800 text-[10px] font-bold">
                        {item.brand}
                      </p>
                    </div>
                    <div className="cursor-pointer flex items-center justify-between p-2 bg-teal-800 text-white rounded-b-lg  ">
                      <p className="text-sm text-nowrap">{item.name}</p>
                      <p className="text-sm text-nowrap bg-black/40 absolute bottom-14 left-[50%] p-1 rounded-md">
                        Price From: $<span>{item.price}</span>
                      </p>
                      <TfiAngleRight className="" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
