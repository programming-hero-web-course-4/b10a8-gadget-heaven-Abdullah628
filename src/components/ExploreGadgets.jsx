import { useState, useEffect } from "react";
import { products } from "../productsData/products";
import { Link } from "react-router-dom";

const ExploreGadgets = () => {
  // const loaderData = useLoaderData();

 
  
  
  

  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("All Product");
  const [selectCategories, setSelectCategories] = useState(products);
  const [visibleProducts, setVisibleProducts] = useState(9); // Show 9 products initially

  

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
  }, [products]);

  const categoryClickHandle = (category) => {
    setSelectCategory(category);
    if (category === "All Product") {
      setSelectCategories(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setSelectCategories(filteredProducts);
    }
    setVisibleProducts(9); // Reset visible products when category changes
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 9); // Load 9 more products
  };

  return (
    <div className="w-10/12 m-auto mt-15 flex gap-10">
      {/* Category Sidebar */}
      <div className="w-2/12 text-center">
        <ul className="flex flex-col gap-4">
          <li
            className={
              selectCategory === "All Product"
                ? "text-white bg-[#9538E2] p-2 rounded-3xl cursor-pointer"
                : "bg-[#09080F0D] p-2 rounded-3xl cursor-pointer"
            }
            onClick={() => categoryClickHandle("All Product")}
          >
            All Product
          </li>
          {categories.map((category, index) => (
            <li
              key={index}
              className={
                selectCategory === category
                  ? "text-white bg-[#9538E2] p-2 rounded-3xl cursor-pointer"
                  : "bg-[#09080F0D] p-2 rounded-3xl cursor-pointer"
              }
              onClick={() => categoryClickHandle(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="w-full">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {selectCategories.map((product) => (
            <div
              key={product.product_id}
              className="bg-[#f1f0f6] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="font-bold text-lg mb-2">{product.product_title}</p>
                <p className="text-gray-600 mb-4">Price: ${product.price}</p>
                <Link to={`/productdetails/${product.product_id}`}>
                <button className="w-2/3  border-[#9538E2] border-2 text-[#9538E2] py-2 px-4 rounded-full cursor-pointer transition-colors duration-300">
                View Details
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleProducts < selectCategories.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreProducts}
              className="bg-[#9538E2] text-white py-2 px-6 rounded-full transition-colors duration-300"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreGadgets;