import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { removeFromCart, updateCartItem } from "../../Redux/cart/cartSlice";
import { CgClose } from "react-icons/cg";
import { FaAngleRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { AiOutlineAlert } from "react-icons/ai";
import { Button } from "antd";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateCartItem({ id, quantity }));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleHomeClick = () => {
    navigate("/products");
  };
  return (
    <div className="max-w-4xl mx-auto p-4 min-h-[600px] mt-20 md:mt-0 ">
      <div className="flex flex-col">
        <div className="flex items-center gap-[40%] mb-2 ">
          <Button
            onClick={handleHomeClick}
            type="text"
            className="!text-teal-800 "
          >
            Back Home
          </Button>
          <h1 className="text-xl md:3xl text-teal-800 font-semibold md:font-bold">
            Your Cart
          </h1>
        </div>
        <div className="bg-teal-50 p-2 rounded-md  lg:max-w-[400px]">
          <span className="flex-1/2 items-center bg-gradient-to-r bg-clip-text  text-transparent from-teal-900 to-teal-500 text-[12px]">
            <AiOutlineAlert className="text-red-600 text-xl" />
            Do some more checkings before checking out. You're a highly valued
            Client
          </span>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-red-400 text-center my-10">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.imgurl}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">${item.price} each</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                className="px-3 py-1 rounded-full bg-teal-800 text-white"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="px-3 py-1 rounded-full bg-teal-800 text-white"
              >
                +
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                className="ml-3 text-red-500 hover:underline cursor-pointer"
              >
                <CgClose />
              </button>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="mt-6 text-right">
          <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        </div>
      )}

      <div className="my-10 flex items-center justify-center ">
        {cartItems.length === 0 ? (
          <Button
            
            onClick={handleHomeClick}
            className="!text-teal-800 "
          >
            Product Listings
          </Button>
        ) : (
          <Link
            to={`/checkout`}
            className="flex items-center justify-center gap-1 cursor-pointer text-teal-800 border-[1px] p-2 rounded-md hover:bg-teal-800 hover:text-white"
          >
            CheckOut <FaAngleRight />
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartPage;
