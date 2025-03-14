import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { db } from '../../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import '../../styles/Cart.css';

export function Cart() {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const orderData = {
      buyer: {
        name: buyerName,
        phone: buyerPhone,
        email: buyerEmail,
      },
      items: cartItems.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice,
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "Compras"), orderData);
      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      setError("Error al procesar la orden. Intente nuevamente.");
      console.error("Error adding document: ", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderId) {
    return (
      <div className="cart-container">
        <div className="order-confirmation">
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu número de orden es: <strong>{orderId}</strong></p>
          <Link to="/CardProductsList" className="continue-shopping">
            Volver a los servicios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Tu Carrito de Servicios</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>No hay servicios en tu carrito</p>
          <Link to="/CardProductsList" className="continue-shopping">
            Ver Servicios Disponibles
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>Precio por sesión: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Resumen del Carrito</h2>
            <div className="total-section">
              <p>Total a Pagar:</p>
              <p className="total-price">${totalPrice}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="checkout-form">
              <h3>Información del Comprador</h3>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono:</label>
                <input
                  type="tel"
                  id="phone"
                  value={buyerPhone}
                  onChange={(e) => setBuyerPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="cart-actions">
                <button onClick={clearCart} className="clear-btn">
                  Vaciar Carrito
                </button>
                <button 
                  type="submit" 
                  className="checkout-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Procesando...' : 'Finalizar Compra'}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}