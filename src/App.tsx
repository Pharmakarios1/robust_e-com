//third party libraries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "Layout/RootLayout";
import { Routes, Route } from "react-router";
//pages
import Cart from "pages/Cart";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import Product from "pages/Products";
import ProductDetails from "pages/ProductDetails";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
