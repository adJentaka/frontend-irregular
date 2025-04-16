import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const NavbarLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default NavbarLayout;
