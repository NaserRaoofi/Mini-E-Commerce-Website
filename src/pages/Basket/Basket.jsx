import React, { useContext, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';
import style from './Basket.module.css';
import Header from '../Home/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';

export default function Basket() {
  const { clickedproduct, handleQuantity, totalPrice } = useContext(ProductContext);
  const [detailVisibility, setDetailVisibility] = useState({});

  const toggleDetail = (productId) => {
    setDetailVisibility(prevVisibility => ({
      ...prevVisibility,
      [productId]: !prevVisibility[productId]
    }));
  };
  return (
    <div className={style.rootcontainer}>
      <Header />
      <Navbar />
      <Search />
      <div className={style.mainContainer}>
        <div className={style.container}>
          <div className={style.totalprice}>
            <h2>Total Price</h2>
            <p>${totalPrice.toFixed(2)}</p>
            <button>Payment</button>
          </div>
          <div className={style.productlist}>
            <h2>Chosen Products</h2>
            {clickedproduct.length === 0 ? (
              <p>No items in the basket.</p>
            ) : (
              clickedproduct.map(product => (
                <div key={product.id} className={style.productItem}>
                  <img src={product.image} alt={product.title} className={style.productImage} />
                  <div className={style.productInfo}>
                    <h4>{product.title}</h4>
                    <div className={style.productdetails}>
                      <button onClick={() => toggleDetail(product.id)}>
                        {detailVisibility[product.id] ? 'Hide Details' : 'Read Details'}
                      </button>
                      {detailVisibility[product.id] && (
                        <span className={style.productdescription}>{product.description}</span>
                      )}
                    </div>
                    <span>${product.price}</span>
                    <div className={style.productActions}>
                      <button onClick={() => handleQuantity(product.id, 'decrement')}>-</button>
                      <span>{product.quantity}</span>
                      <button onClick={() => handleQuantity(product.id, 'increment')}>+</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
