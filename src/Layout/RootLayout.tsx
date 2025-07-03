import { Outlet } from "react-router";
import { domAnimation, LazyMotion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomHeader from "@components/CustomHeader";
import Footer from "@components/Footer";
import Ads from "@components/CustomHeader/_partials/Ads";

const RootLayout = () => {
  return (
    <div>
      <LazyMotion features={domAnimation}>
        <header>
          <Ads />
          <CustomHeader />
          <ToastContainer />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </LazyMotion>
    </div>
  );
};

export default RootLayout;
