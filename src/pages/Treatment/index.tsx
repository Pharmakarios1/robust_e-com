import { AiFillProduct } from "react-icons/ai";
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
        <div className="flex p-4 flex-col md:flex-row gap-4">
          <img
            src={treatment.imgurl || "/png/hero.png"}
            alt={treatment.condition}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="flex flex-col justify-center md:justify-start">
            <h1 className="text-3xl font-bold">{treatment.condition}</h1>
            <p className="text-gray-400 text-xl">{treatment.tag}</p>
            <p className="text-sm md:text-base pt-3">{treatment.description}</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-4">Available Treatments</h2>
          <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {treatment.products.map((item, index) => {
              const slug = item.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  to={`products/${slug}`}
                  key={index}
                  className="text-sm md:text-base list-none"
                >
                  <div className="flex flex-col  md:w-full  rounded-lg shadow-md hover:shadow-teal-600 transition-shadow  duration-300 ">
                    <img
                      src={defaultImg}
                      alt={item.name}
                      className="rounded-t-lg w-full h-44  md:flex"
                    />
                    <div className="cursor-pointer flex items-center justify-between p-2 bg-teal-800 text-white rounded-b-lg  ">
                      <p>{<AiFillProduct />}</p>
                      <p className="text-lg font-semibold">{item.name}</p>
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
