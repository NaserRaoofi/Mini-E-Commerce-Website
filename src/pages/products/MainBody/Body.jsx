import React, { useContext } from 'react';
import style from './Body.module.css';
import { ProductContext } from '../../Context/ProductContext';
import { Link, useParams } from 'react-router-dom';

export default function Body() {
  const { id } = useParams(); // Get the product ID from the URL
  const { products } = useContext(ProductContext); // Access products from the context

  // Find the product that matches the ID from the URL
  const product = products.find(product => product.id === parseInt(id));

  // If the product is not found, you might want to show an error message
  if (!product) {
    return (
      <div className={style.bodyroot}>
        <div className={style.maincontainer}>
          <h2>Product not found</h2>
          <Link to="/">
            <button className={style.buyButton}>Back to shop</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={style.bodyroot}>
      <div className={style.maincontainer}>
        <div className={style.imageContainer}>
          <img src={product.image} alt={product.title} className={style.image} />
        </div>

        <div className={style.productInfo}>
          <h2>{product.title}</h2>
          <span>Price: $ {product.price}</span>
          <span>{product.description}</span>
          <Link to="/">
            <button className={style.buyButton}>Back to shop</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
