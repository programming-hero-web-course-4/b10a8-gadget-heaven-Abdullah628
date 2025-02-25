import { useLoaderData, useParams } from "react-router-dom";
// import { products } from "../productsData/products"; // Import your products data
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { CartItemsContext, WishListContext } from "../context/contextData";
import { getCartItems, getWishList } from "../utils/dataDb";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { id } = useParams(); // Get productId from the URL
  const [cartItems, setCartItems] = useContext(CartItemsContext);
  const [wishList, setWishList] = useContext(WishListContext);

  const products = useLoaderData();

  const product = products.find((p) => p.product_id === id); // Find the product

  if (!product) {
    return <div>Product not found!</div>;
  }

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

  const addToWishList = (product) => {

    console.log(product)

    const wishList = getWishList();

    const isExist = wishList.find(
      (item) => item.product_id === product.product_id
    );

    if (isExist) {
      toast.error("This product is already in the wishlist!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
      return wishList; // Do not update state
    }

    toast.success("Added to wishlist!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });

    setWishList((prevWishList) => [...prevWishList, product]);
    localStorage.setItem("wishList", JSON.stringify([...wishList, product]));

  };

  console.log("wishList-",wishList);
  console.log(cartItems);

  return (
    <div>
      {/* Banner Section */}
      <div className="text-center bg-[#9538E2] text-white py-20 pb-50">
        <h2 className="text-3xl font-bold mb-4 w-[80%] m-auto">
          Product Details
        </h2>
        <p className="text-lg mb-8 w-[60%] m-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product Details Section */}
      <div className="w-[90%] md:w-[60%] m-auto mt-[-170px] rounded-lg bg-white p-6 flex flex-col md:flex-row gap-8 shadow-lg">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.product_image}
            alt={product.product_title}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">{product.product_title}</h1>
          <p className="text-lg text-gray-700 mb-4">Price: ${product.price}</p>
          {product.availability?<p className=" w-1/3 text-center mb-4 text-sm border border-green-400 rounded-full">
            <span className="text-green-600 ">In Stock</span>
          </p>: <p className=" w-1/3 text-center mb-4 text-sm border border-red-400 rounded-full">
            <span className="text-red-600 ">Out of Stock</span>
          </p>}

          <p className="text-gray-700 text-sm mb-4">
            Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
            display.
          </p>

          {/* Specifications */}
          <p className="font-bold text-lg mb-2">Specifications:</p>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
            {product.Specification?.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <p className="font-bold text-lg mr-2">Rating:</p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-yellow-400">
                  {index < product.rating ? <FaStar /> : <FaRegStar />}
                </span>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="flex gap-3 text-2xl  text-[#403f3f]">
            <button
              onClick={() => addToCart(product)}
              className="bg-[#9538E2] text-white py-2 px-6 rounded-full cursor-pointer hover:bg-[#9164af] transition duration-300"
            >
              Add to Cart
            </button>
            <span
              className="border-2 border-[#9538E2] text-[#9538E2]  rounded-full w-12 cursor-pointer p-3 hover:bg-[#9538E2] hover:text-white"
              onClick={() => addToWishList(product)}
            >
              <CiHeart />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
