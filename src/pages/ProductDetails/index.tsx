import { useParams } from "react-router";

const ProductDetails = () => {
  const { slug } = useParams(); // optional if you use nested route params

  return (
    <div>
      <h1>Product Detail for: {slug}</h1>
      {/* fetch product info by slug or show static content */}
    </div>
  );
};

export default ProductDetails;
