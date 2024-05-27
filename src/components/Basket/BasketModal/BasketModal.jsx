import React, { useContext } from 'react';
import { ProductContext } from '../../../pages/Context/ProductContext';
import style from '../BasketModal/BasketModal.module.css'; // Assuming you have a CSS module for styling
import basketIcon from '../../../assets/Images/basket.png'; // Assuming you have an image file for the basket icon
import { Link } from 'react-router-dom';

export default function BasketData() {
  const { clickedproduct, handleQuantity,totalPrice } = useContext(ProductContext);
 

  return (
    <div className={style.basketIconContainer}>
      <Link to='/Basket'>
      <img
        src={basketIcon}
        alt="Basket"
        className={style.basketIcon}
      />
      </Link>
      {clickedproduct.length > 0 && (
        <div className={style.notificationBadge}>
          {clickedproduct.length}
        </div>
      )}
      <div className={style.basketModal}>
        <div className={style.basketProducts}>
            <div className={style.basketheader}>
            <h2>Basket</h2>
            <h3>Total Products : {clickedproduct.length}</h3>
            </div>


          {clickedproduct.length === 0 ? (
            <p>No items in the basket.</p>
          ) : (
            clickedproduct.map(product => (
              <div key={product.id} className={style.basketProduct}>
                <img src={product.image} alt={product.title} />
                <div className={style.productInfo}>
                  <h4>{product.title}</h4>
                  <p>${product.price}</p>
                </div>
                <div className={style.productActions}>
                  <button onClick={() => handleQuantity(product.id, 'decrement')}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleQuantity(product.id, 'increment')}>+</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className={style.totalprice}>
          <Link to='/Basket'>
            <button>Finalize Order</button>
            </Link>
            <p>Total Price : {totalPrice.toFixed(2)} </p>
        </div>
      </div>
    </div>
  );
}
