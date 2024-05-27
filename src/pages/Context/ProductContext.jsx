import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const [clickedproduct, setClickedProduct] = useState(() => {
    const storedClickedProduct = localStorage.getItem('clickedproduct');
    return storedClickedProduct ? JSON.parse(storedClickedProduct) : [];
  });

  const handleQuantity = (id, type) => {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === id) {
          const newQuantity = type === 'increment' ? product.quantity + 1 : Math.max(product.quantity - 1, 0);
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
    });

    setClickedProduct(prevClicked => {
      const existingProductIndex = prevClicked.findIndex(product => product.id === id);
      const product = prevClicked[existingProductIndex];
      if (existingProductIndex !== -1 && type === 'increment') {
        const updatedProduct = { ...product, quantity: product.quantity + 1 };
        return prevClicked.map((product, index) => 
          index === existingProductIndex ? updatedProduct : product
        );
      } else if (existingProductIndex !== -1 && type === 'decrement') {
        const updatedProduct = { ...product, quantity: Math.max(product.quantity - 1, 0) };
        if (updatedProduct.quantity === 0) {
          return prevClicked.filter(product => product.id !== id);
        }
        return prevClicked.map((product, index) => 
          index === existingProductIndex ? updatedProduct : product
        );
        
      } else if (existingProductIndex === -1 && type === 'increment') {
        const newProduct = products.find(product => product.id === id);
        return [...prevClicked, { ...newProduct, quantity: 1 }];
      }
      return prevClicked;
    });
  };

  useEffect(() => {
    localStorage.setItem('clickedproduct', JSON.stringify(clickedproduct));
  }, [clickedproduct]);

  useEffect(() => {
    console.log('clickedproduct updated:', clickedproduct);
  }, [clickedproduct]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = clickedproduct.reduce((acc, product) => acc + product.price * product.quantity, 0);
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [clickedproduct]);

  useEffect(() => {
    const filterProductsByCategory = () => {
      const filtered = products.filter(product =>
        selectedCategories.includes(product.category)
      );
      setFilteredProducts(filtered);
    };
    filterProductsByCategory();
  }, [selectedCategories, products]); 

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        errors,
        setErrors,
        handleQuantity,
        clickedproduct,
        totalPrice,
        selectedCategories,
        setSelectedCategories,
        searchResults,
        setSearchResults,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
