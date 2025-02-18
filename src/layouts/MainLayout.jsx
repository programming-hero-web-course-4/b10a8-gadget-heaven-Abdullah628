
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
import Footer from "../components/Footer";

const MainLayout = ({children}) => {
  return (
    <div className="bg-[#f1f0f6]">
      <Navbar />
      <main>{children}</main>

      <Footer />
      
    </div>
  );
};


MainLayout.propTypes = {
  children: PropTypes.object
}

export default MainLayout;
