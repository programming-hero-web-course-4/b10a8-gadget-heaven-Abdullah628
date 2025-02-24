
import { CartItemsContext, WishListContext } from "../context/contextData";
import image from "../assets/Group.png"

import { RxCross2 } from "react-icons/rx";
import { HiAdjustmentsVertical } from "react-icons/hi2";
// import Button from "../components/Button";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCartItems } from "../utils/dataDb";

const Dashboard = () => {
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  const [wishList, setWishList] = useContext(WishListContext);
  const [showCart, setShowCart] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  console.log("cartItems", cartItems);

  const removeCartItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.product_id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const removeWishlistItem = (id) => {
    const updateWishList = wishList.filter((item) => item.product_id !== id);
    setWishList(updateWishList);
    localStorage.setItem("wishList", JSON.stringify(updateWishList));
  };

  const handleSort = () => {
    cartItems.sort((a, b) => b.price - a.price);
    setCartItems([...cartItems]);
  };

  const addToCart = (product) => {
      const cartItems = getCartItems();
  
      console.log(" cartItems from local storage: ", cartItems);
  
      const isExist = cartItems.find(
        (item) => item.product_id === product.product_id
      );
  
      if (isExist) {
        toast.error("This product is already in the cart!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
        return cartItems; // Do not update state
      }
  
      toast.success("Added to cart!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
  
      setCartItems((prevCartItems) => [...prevCartItems, product]);
  
      localStorage.setItem("cartItems", JSON.stringify([...cartItems, product]));
    };

    const handlePurchase = () => {
      setShowSuccessModal(true)
            
    }

    const handleCloseModal = () => {
      setShowSuccessModal(false)
      setCartItems([])
      // Clear cart items from localStorage
      localStorage.setItem("cartItems", JSON.stringify([]))
    }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="text-center bg-[#9538E2] text-white py-20 ">
        <h2 className="text-3xl font-bold mb-4 w-[80%] m-auto">
          Product Details
        </h2>
        <p className="text-lg mb-8 w-[60%] m-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-4">
        <button onClick={() => setShowCart(true)} className={showCart ? " bg-[#fff] text-[#9538E2]  py-2 px-4 rounded-full cursor-pointer  font-bold " : "border-2 rounded-full px-4 font-bold cursor-pointer"}>Cart</button>
          <button onClick={() => setShowCart(false)} className={!showCart ? " bg-[#fff] text-[#9538E2] py-2 px-4 rounded-full cursor-pointer  font-bold " : "border-2 rounded-full px-4 font-bold cursor-pointer"}>Wishlist</button>
        </div>
      </div>

      {/* Product Details Section */}

      <div className=" mx-auto p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{showCart ? "Cart" : "Wishlist"}</h1>
          {showCart ? <div className="flex items-center gap-4">
            <div className=" text-right text-xl font-bold">
              Total cost: ${total.toFixed(2)}
            </div>
            <button onClick={handleSort} className=" border-[#9538E2] border-2 flex gap-2 items-center text-[#9538E2] py-2 px-4 rounded-full cursor-pointer transition-colors duration-300">
              Sort by Price <HiAdjustmentsVertical size={20} />
            </button>
            {/* <Button bgColor={"#9538E2"} text={"Purchase"} textColor={"#fff"} /> */}
            <button onClick={handlePurchase} className="bg-[#9538E2]  text-[#fff] py-2 px-4 rounded-full cursor-pointer transition-colors duration-300">Purchase</button>
          </div> : ""}
        </div>

        <div className="space-y-4">
          {(showCart ?cartItems : wishList).map((item) => (
            <div
              key={item.product_id}
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow"
            >
              <img src={item.product_image} alt="" className="w-16 h-16" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h2 className="font-semibold">{item.product_title}</h2>
                  <button
                    onClick={() => showCart ? removeCartItem(item.product_id) : removeWishlistItem(item.product_id)}
                    className="text-gray-400 hover:text-gray-600 border-2 border-red-600 rounded-full p-1 cursor-pointer"
                  >
                    <RxCross2 className="text-red-600" size={20} />
                  </button>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <p className="mt-1">Price: ${item.price}</p>
                {!showCart && <button onClick={() => addToCart(item)} className="bg-[#9538E2] mt-2  text-[#fff] py-2 px-4 rounded-full cursor-pointer transition-colors duration-300">Add To Cart</button>}
              </div>
            </div>
          ))}
        </div>


        {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-[400px] w-full mx-4 transform transition-all">
            {/* Checkmark Icon */}
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <img src={image} alt="Checkmark" className="w-8 h-8 text-green-500" />
            </div>

            {/* Modal Content */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Payment Successfully</h3>
              <p className="text-gray-600 mb-2">Thanks for purchasing.</p>
              <p className="text-sm text-gray-500 mb-6">Total: ${total.toFixed(2)}</p>
              <button
                onClick={handleCloseModal}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Dashboard;
