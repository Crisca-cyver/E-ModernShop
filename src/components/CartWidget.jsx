import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const itemCount = 5; // Componente CartWidget: -Muestra  el ícono de carrito y una burbuja de notificación con un valor estático
  

  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-indigo-600" />
      <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
        {itemCount}
      </span>
    </Link>
  );
};

export default CartWidget;