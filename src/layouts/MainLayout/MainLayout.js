import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { route } from "../../config/route";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import "./MainLayout.css";

export default function MainLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [a, setA] = useState("");
  const { pathname } = useLocation();

  useTitle(pathname);

  return (
    <div className="main-layout-wrapper">
      <div className="position-sticky header-wrapper">
        <Header
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          pathname={pathname}
        />
      </div>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        pathname={pathname}
      />
      <div className="main-pages-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Outlet context={{ a, setA }} />
          </motion.div>
        </AnimatePresence>
      </div>
      {pathname !== route.home ? <Footer /> : <></>}
    </div>
  );
}
