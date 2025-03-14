import React from "react";
import "../../styles/CardProducts.css";
import icono from "../../images/Masajes/masaje-facial.png";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export function CardProduct({
  id,
  image,
  title,
  description,
  duration,
  objetive,
  technique,
  benefits,
  price,
  category
}) {
  

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/product/${id}`);
  };
  

  
  
  const handleAddToCart = () => {
    addToCart({ id, title, price });

    
  };

  return (
    <div className="card-container">
      <div className="emoji-container">
        <img src={icono} alt="" className="emoji" />
      </div>
      <div className="title-container">
        <h3 className="title">{title}</h3>
        <p className="title-description">
          {description}
        </p>
      </div>
      <div className="description-container">
        <p>
          <strong>OBJETIVO: </strong> {objetive}
        </p>
        <p>
          <strong>PRECIO: </strong> ${price}
        </p>
        <div className="button-container">
    <button className="detailsProduct-btn" onClick={handleDetailsClick}>
      Detalles del producto
    </button>
    <button className="add-to-cart-btn" onClick={handleAddToCart}>
      Agregar al carrito
    </button>
  </div>
      </div>
    </div>
  );
}