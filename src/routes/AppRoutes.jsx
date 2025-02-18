import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import ProductDetails from "../pages/ProductDetails";

function AppRoutes() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path = "/productdetails" element = {<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
