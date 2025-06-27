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
  return (
    <div className="relative bg-white p-4 mt-10 w-full md:w-[80%] rounded-lg shadow-md border-[1px] border-teal-800">
      <p className="absolute -top-4 left-[20%] transform -translate-x-1/2 text-md  p-1 text-white w-28  rounded-md bg-teal-800 mb-2">
        Price Checker
      </p>
      <p className="text-sm text-gray-600 mb-2">
        Check the price of {product.name} for {treatment.condition}.
      </p>
      <div className="flex items-center justify-between">
        <span className="text-teal-800 font-bold text-xl">
          ${product.price}
        </span>
      </div>
      <div className="flex my-5 items-center">
        <p>Qty:</p>
        <div className="flex  ml-4">
          <button className="ml-2 bg-teal-800 text-white px-3 py-1 rounded hover:bg-teal-700 transition-colors">
            +
          </button>

          <span>0</span>
          <button className="ml-2 bg-teal-800 text-white px-3 py-1 rounded hover:bg-teal-700 transition-colors">
            -
          </button>
        </div>
      </div>
      <div className="mt-4"></div>
      <button className="mt-4 bg-teal-800 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors">
        Add to Cart
      </button>
    </div>
  );
};

export default PriceChecker;
