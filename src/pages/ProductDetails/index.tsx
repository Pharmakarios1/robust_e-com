import { useParams } from "react-router";
import { treatments } from "utils/data";

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
      <div className="w-[90%] md:w-[45%] mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl text-teal-800 font-semibold md:text-2xl mb-4">
          Product Detail for: {product?.name}
        </h1>
        <p className="text-teal-800">Brand: {product?.brand}</p>
        <p className="text-red-400">Price: ${product?.price}</p>
        <p className="text-teal-800">
          <span className="font-bold ">Description:</span>{" "}
          {product?.description}
        </p>
        <div className="flex">
          {product?.imgurl && (
            <img src={product.imgurl} alt={product.name} className="" />
          )}
          <div className="flex items-center justify-center w-full h-full border-1 rounded-lg border-teal-800 pl-4">
            <h1>Add to Cart</h1>
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-[45%] mx-auto bg-white rounded-lg shadow-md p-6">
        <h1>Cart information</h1>
        <p className="text-teal-800">
          Add this product to your cart for purchase.
        </p>
        <p className="text-teal-800">
          You can also consult with a specialist for more information.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
