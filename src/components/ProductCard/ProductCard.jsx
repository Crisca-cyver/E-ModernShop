import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { id, name, price, image, description } = product;
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-indigo-600">${price}</span>
            <button 
              onClick={handleAddToCart}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;