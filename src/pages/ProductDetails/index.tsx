//third party import
import { BiStar } from "react-icons/bi";

import { useParams } from "react-router";

//data & component
import { treatments } from "utils/data";
import PriceChecker from "@components/CustomPriceChecker";
import { BsTruck } from "react-icons/bs";

const ProductDetails = () => {
  const { productSlug } = useParams();
  console.log("ProductDetails slug:", productSlug);
  // Find the treatment that contains the product
  const treatment = treatments.find((treatment) =>
    treatment.products.some((tx) => tx.slug === productSlug)
  );

  // Then find the product inside that treatment
  const product = treatment?.products.find((tx) => tx.slug === productSlug);

  return (
    <div className="bg-teal-100 py-20 flex flex-col md:flex-row">
      <div className="w-[90%]  md:w-[70%] mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="flex flex-col w-2/2 items-center">
            {product?.imgurl && (
              <img src={product.imgurl} alt={product.name} className="" />
            )}
            <ul>
              <li>
                <p className="text-sm text-gray-500">
                  Product ID: {treatment?.id || "N/A"}
                </p>
              </li>
              <li>
                <p className="text-sm text-gray-500">
                  Product slug: {product?.slug || "N/A"}
                </p>
              </li>
              <li>
                <p className="text-sm text-gray-500">
                  Product brand : {product?.brand || "N/A"}
                </p>
              </li>
              <li className="text-teal-600 flex items-center">
                <BsTruck className="mr-2" /> Free shipping on all orders over
                £50
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center md:justify-start md:ml-6">
            <h1 className="text-xl text-teal-800 font-semibold md:text-2xl mb-4">
              {product?.name} for {treatment?.condition}
            </h1>
            <p className="text-gray-400 text-sm ">
              {product?.name} : {product?.description}
            </p>
            <p className="text-gray-400 text-sm">{treatment?.description}</p>

            {product && treatment && (
              <PriceChecker product={product} treatment={treatment} />
            )}
          </div>
        </div>
      </div>
      <div className="w-[90%] mt-5 md:mt-0 md:w-[20%] mx-auto bg-teal-100 ">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-1.5 text-teal-800 font-semibold text-sm">
            <BiStar /> Other popular options
          </div>
          <ul>
            {treatment?.products.map((item, index) => (
              <li key={index} className="text-sm text-gray-600 mb-2">
                <a
                  href={`/treatments/${treatment.slug}/${item.slug}`}
                  className="hover:text-teal-800 transition-colors pl-5 mt-5"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md my-6">
          <div className="flex items-center gap-1.5 text-teal-800 font-semibold text-sm">
            <BsTruck className="mr-1" /> Shipping Information
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Free shipping on all orders over £50. Standard delivery takes 3-5
            business days.
          </p>
        </div>
        <div className="bg-teal-800 p-6 rounded-lg shadow-md my-6 text-white">
          <p className="text-white">Secure Payment Options</p>
          <p className="text-gray-200">
            We accept all major credit cards, PayPal, and Apple Pay.
          </p>
          <img src="/png/visa.png" alt="" className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
