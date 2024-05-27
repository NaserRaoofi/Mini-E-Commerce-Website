import React, { useContext,useState,useEffect } from "react";
import style from "./Body.module.css";
import Cart from "../Carts/Cart";
import Fetchproduct from "../../../services/productData/Fproduct";
import { ProductContext } from "../../Context/ProductContext";

export default function Body() {
  const { products, errors, clickedproduct,filteredProducts,searchResults } = useContext(ProductContext);
const [MergedFilters,setMergedFilters]=useState([]);
  // Merge products with clickedproduct to get the updated quantity
  const mergedProducts = products.map(product => {
    const clickedProduct = clickedproduct.find(p => p.id === product.id);
    return clickedProduct ? { ...product, quantity: clickedProduct.quantity } : product;
  });
  

  const { selectedCategories, setSelectedCategories } = useContext(ProductContext);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories((prevSelectedCategories) => {
      if (checked) {
        return [...prevSelectedCategories, value];
      } else {
        return prevSelectedCategories.filter((category) => category !== value);
      }
    });
  };
  
  useEffect(() => {
    setMergedFilters([...filteredProducts, ...searchResults]);
  }, [filteredProducts, searchResults]);

console.log(MergedFilters)
  return (
    <div className={style.mainroot}>



<div className={style.filtercontainer}>
  <div className={style.checkboxContainer}>
    <label>
      <input type="checkbox" value="men's clothing"  onChange={handleCheckboxChange} />
      Men's Clothing
    </label>
  </div>
  <div className={style.checkboxContainer}>
    <label>
      <input type="checkbox" value="jewelery" onChange={handleCheckboxChange} />
      Jewelery
    </label>
  </div>
  <div className={style.checkboxContainer}>
    <label>
      <input type="checkbox" value="electronics" onChange={handleCheckboxChange} />
      Electronics
    </label>
  </div>
  <div className={style.checkboxContainer}>
    <label>
      <input type="checkbox" value="women's clothing" onChange={handleCheckboxChange} />
      Women's Clothing
    </label>
  </div>
</div>




<div className={style.maincontainer}>
        {errors && <p>Error: {errors}</p>}
        {MergedFilters.length !== 0 ? (
          <div className={style.app}>
            {MergedFilters.map((product) => (
              <Cart
                key={product.id}
                id={product.id}
                title={product.title}
                price={`$${product.price}`}
                rating={product.rating}
                quantity={product.quantity} // Use merged product's quantity
                image={product.image}
              />
            ))}
          </div>
        ) : (
          <div className={style.app}>
            {mergedProducts.map((product) => (
              <Cart
                key={product.id}
                id={product.id}
                title={product.title}
                price={`$${product.price}`}
                rating={product.rating}
                quantity={product.quantity} // Use merged product's quantity
                image={product.image}
              />
            ))}
          </div>
        )}



        <Fetchproduct />
      </div>
    </div>
  );
}
