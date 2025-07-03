import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { RootState } from "Redux/store";

const CartBox = () => {
  //Redux managing cartItems
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // Total quantity: sum of all item quantities
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Link to={`/cart`} className="relative cursor-pointer z-10">
      <BsCart className="text-2xl md:text-teal-800" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartBox;
