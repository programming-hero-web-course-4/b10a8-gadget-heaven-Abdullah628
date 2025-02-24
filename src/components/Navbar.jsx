import { Link } from "react-router-dom";
import { useContext } from "react";;
import { CartItemsContext, WishListContext } from "../context/contextData";
import { CiShoppingCart, CiHeart } from "react-icons/ci";


function Navbar() {
  const [wishList] = useContext(WishListContext);
  const [cartItems] = useContext(CartItemsContext);
  const cartCount = cartItems.length;
  const wishlistCount = wishList.length;
  return (
    <nav className="flex justify-between p-4 items-center mx-10">
      <div>
        <h1 className="text-2xl font-bold">Gadget Heaven</h1>
      </div>
      <ul className="flex gap-3 text-[#403f3f]"> 
        <li><Link to="/">Home</Link></li>
       
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/gadget-update">Gadget-Update</Link></li>
      </ul>

      <div className="flex gap-3 text-2xl text-[#403f3f] relative">
      {/* Shopping Cart Icon */}
      <Link to="/dashboard">
      <div className="border rounded-full p-2 relative">
        <span className="font-bold"><CiShoppingCart /></span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
            {cartCount}
          </span>
        )}
      </div>
      </Link>

      {/* Wishlist Icon */}
      <Link to="/dashboard">
      <div className="border rounded-full p-2 relative">
        <CiHeart />
        {wishlistCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
            {wishlistCount}
          </span>
        )}
      </div>
      </Link>
    </div>
    </nav>
  );
}

export default Navbar;
