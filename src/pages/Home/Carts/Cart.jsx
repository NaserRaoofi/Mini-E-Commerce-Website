import React, { useContext } from 'react';
import style from './Cart.module.css';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Context/ProductContext';

export default function ProductCard({ id, title, price, image, rating, quantity }) {
  const { handleQuantity } = useContext(ProductContext);

  return (
    <div className={style.card}>
      <Link to={`/ProductPage/${id}`} className={style.imageContainer}>
        <img src={image} alt={title} className={style.productImage} />
      </Link>
      <div className={style.productInfo}>
        <Link to={`/ProductPage/${id}`} className={style.productLink}>
          <h2 className={style.productName}>{title}</h2>
        </Link>
        <p className={style.productPrice}>{price}</p>
        <p className={style.productRating}>
          Rating: {rating.rate} ({rating.count} reviews)
        </p>

        {quantity === 0 ? (
  <button className={style.buyButton} onClick={() => handleQuantity(id, 'increment')}>
    Buy
  </button>
) : (
  <div className={style.quantityControl}>
    <button
      onClick={() => handleQuantity(id, 'decrement')}
      className={style.quantityButton}
    >
      -
    </button>
    <span className={style.quantity}>{quantity}</span>
    <button
      onClick={() => handleQuantity(id, 'increment')}
      className={style.quantityButton}
    >
      +
    </button>
  </div>
)}

        


      </div>
    </div>
  );
}
