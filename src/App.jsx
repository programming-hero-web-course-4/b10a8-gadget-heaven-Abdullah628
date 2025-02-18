import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { WishListContext, CartItemsContext } from "./context/contextData";
import { ToastContainer } from "react-toastify";
import { getCartItems, getWishList } from "./utils/dataDb";



function App() {
  const [cartItems, setCartItems] = useState(getCartItems());
  const [wishList, setWishList] = useState(getWishList());
  return (
    <div>
      <WishListContext.Provider value={[wishList, setWishList]}>
        <CartItemsContext.Provider value={[cartItems, setCartItems]}>
          <Navbar />
          <Outlet />
          <Footer />
          <ToastContainer />
        </CartItemsContext.Provider>
      </WishListContext.Provider>
    </div>
  );
}

export default App;
