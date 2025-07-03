import CustomSearch from "@components/CustomSearch";
import { Button, InputRef } from "antd";
import { useEffect, useRef, useState } from "react";
import { AiOutlineAlert } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router";
import { treatments } from "utils/data";

//redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "Redux/cart/cartSlice";
import { toast } from "react-toastify";
import CartBox from "@components/Cart";
import { BsCart } from "react-icons/bs";
import { RootState } from "Redux/store";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    imgurl: string;
    brand: string;
    price: number;
    slug: string;
    description: string;
  } | null>(null);

  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null
  );
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  const filteredTreatments = selectedTreatment
    ? treatments.filter((t) => t.slug === selectedTreatment)
    : treatments;
  const dispatch = useDispatch();

  const isActive = useSelector(
    (state: RootState) => state.ui.isSearchBoxActive
  );
  const inputRef = useRef<InputRef>(null);
  useEffect(() => {
    if (isActive) {
      inputRef.current?.focus();
    }
  }, [inputRef.current]);
  return (
    <div className="min-h-[600px] my-20 md:my-7 w-[90%] mx-auto">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-2 ">
          <Button
            onClick={handleHomeClick}
            type="text"
            className="!text-teal-800 "
          >
            Back Home
          </Button>
          <h1 className="text-xl md:3xl text-teal-800 font-semibold md:font-bold">
            Health Products
          </h1>
          <div className="hidden md:block">
            <CartBox />
          </div>
        </div>
        <div className="bg-teal-50 p-2 rounded-md  lg:max-w-[400px]">
          <span className="flex-1/2 items-center bg-gradient-to-r bg-clip-text  text-transparent from-teal-900 to-teal-500 text-[12px]">
            <AiOutlineAlert className="text-red-600 text-xl" />
            Health Products are not your regular commodity. Ensure, you get
            proper prescriptions from your Meds/Pharmacists
          </span>
        </div>
      </div>
      <div className="my-5">
        {/* selection and search */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-2 border-b-[1px] border-teal-400/50 mb-5">
          <select
            onChange={(e) => setSelectedTreatment(e.target.value)}
            className="p-2 border rounded mb-4 focus:border-[1px] border-teal-300"
          >
            <option value="">All Treatments</option>
            {treatments.map((t) => (
              <option key={t.id} value={t.slug}>
                {t.condition}
              </option>
            ))}
          </select>
          <div className="flex justify-center lg:justify-start w-full h-16 ">
            <CustomSearch ref={inputRef} className="!w-w[300px] md:!w-full" />
          </div>
        </div>
        {/* Card */}
        {filteredTreatments.map((treatment) => (
          <div key={treatment.id} className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {treatment.products.map((product) => (
                <div
                  key={product.slug}
                  className="shadow-md relative border border-black/20 rounded-md"
                >
                  <img
                    src={product.imgurl}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-2"
                  />
                  <div className="flex items-center justify-between p-2">
                    <h3 className="text-md text-teal-700">{product.name}</h3>
                    <p className="text-sm text-gray-500 absolute top-0 right-2">
                      {product.brand}
                    </p>
                    <p className="text-teal-700 font-semibold">
                      ${product.price}
                    </p>
                  </div>

                  <div className="flex items-center justify-between p-2">
                    <Button
                      type="text"
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: product.slug,
                            name: product.name,
                            price: product.price,
                            imgurl: product.imgurl,
                            quantity: 1,
                          })
                        );
                        toast.success(`${product.name} added to cart!`);
                      }}
                      className="mt-2 !bg-teal-800 text-white py-1 px-4 rounded hover:bg-teal-600"
                    >
                      <BsCart />
                    </Button>
                    <Button
                      type="text"
                      onClick={() => setSelectedProduct(product)}
                      className="text-md !text-teal-600"
                    >
                      <BiInfoCircle />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
            <div className="bg-teal-100 p-4 rounded-lg max-w-sm w-full">
              <div className="flex items-center justify-between py-1">
                <h3 className="text-md text-teal-800 mb-2">
                  {selectedProduct.name}
                </h3>
                <Button
                  className=" !bg-red-600 text-white rounded "
                  onClick={() => setSelectedProduct(null)}
                >
                  <CgClose />
                </Button>
              </div>
              <img
                src={selectedProduct.imgurl}
                alt={selectedProduct.name}
                className="w-full h-36 object-cover mb-2 rounded-md"
              />
              <p className="text-teal-800 text-sm">
                {selectedProduct.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
