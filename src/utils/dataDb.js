export const getCartItems = () => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  };

  export const getWishList = () => {
    const storedWishList = localStorage.getItem("wishList");
    return storedWishList ? JSON.parse(storedWishList) : [];
  };