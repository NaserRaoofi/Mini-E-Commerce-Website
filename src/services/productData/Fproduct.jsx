import React, { useContext, useEffect } from "react";
import axios from "axios";
import { ProductContext } from "../../pages/Context/ProductContext";

export default function Fetchproduct() {
  const { setProducts, setErrors } = useContext(ProductContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data
        const ModifiedData=data.map(product=>({
          ...product,quantity: 0
        }))
        setProducts(ModifiedData)
      } catch (error) {
        setErrors(error.message);
      }
    };

    fetchData();
  }, [setProducts, setErrors]);

  return null; // This component doesn't render anything itself
}
