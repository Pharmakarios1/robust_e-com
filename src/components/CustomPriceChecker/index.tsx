//redux mgt
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../Redux/cart/cartSlice";

import { useNavigate } from "react-router";

type PriceCheckerProps = {
  product: {
    name: string;
    brand: string;
    price: number;
    imgurl: string;
    slug: string;
    description: string;
  };
  treatment: {
    id: number;
    condition: string;
    // Add more fields as needed
  };
};

const PriceChecker = ({ product, treatment }: PriceCheckerProps) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  //redux
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.slug,
        name: product.name,
        price: product.price,
        imgurl: product.imgurl,
        quantity,
      })
    );
    navigate("/cart");
  };

  return (
    <div className="relative bg-white p-4 mt-10 w-full md:w-[80%] rounded-lg shadow-md border-[1px] border-teal-800">
      <p className="absolute -top-4 left-[20%] transform -translate-x-1/2 text-md  p-1 text-white w-28  rounded-md bg-teal-800 mb-2">
        Price Checker
      </p>
      <p className="text-sm text-gray-600 my-3">
        Check the price of {product.name} for {treatment.condition}.
      </p>
      <div className="flex items-center justify-between">
        <span className="text-teal-800 font-bold text-xl">
          ${product.price}
        </span>
      </div>
      <div className="flex my-5 items-center">
        <p>Qty:</p>
        <div className="flex items-center gap-2 ">
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="ml-2 flex items-center justify-center bg-teal-800 text-white w-9 h-9 rounded-full cursor-pointer hover:bg-teal-700 transition-colors"
          >
            +
          </button>

          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className=" flex items-center justify-center bg-teal-800 text-white w-9 h-9 rounded-full cursor-pointer hover:bg-teal-700 transition-colors"
          >
            -
          </button>
        </div>
      </div>
      <div className="mt-4"></div>
      <button
        onClick={handleAddToCart}
        className="mt-4 cursor-pointer bg-teal-800 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PriceChecker;
