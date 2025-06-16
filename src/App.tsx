//third party libraries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "Layout/RootLayout";
import { Routes, Route } from "react-router";
import { ConfigProvider } from "antd";
//pages
import Cart from "pages/Cart";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import Product from "pages/Products";
import ProductDetails from "pages/ProductDetails";
import Blog from "pages/Blog/Index";
import Treatment from "pages/Treatment";

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
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#14b8a6",
            colorText: "#0f172a",
            colorBgBase: "#f8fafc",
          },
          components: {
            // Customize Ant Design components here
            Button: {
              colorPrimary: "#FF4500",
              colorText: "#ffffff",
              colorBgContainer: "#f8fafc",
            },
          },
        }}
      >
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/review" element={<p>hello</p>} />
            <Route path="/treatment/:id" element={<Treatment />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
