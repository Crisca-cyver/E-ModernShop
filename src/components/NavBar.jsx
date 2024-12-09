import React from 'react';
import { Link } from 'react-router-dom';
import { Store } from 'lucide-react';
import CartWidget from './CartWidget';

//Componete NavBar:
//-Muestra el brandname de la tienda en NavBar
//-Muestra las categorías de los productos.
//-Muestra el CartWidget.

const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Store className="h-8 w-8 text-indigo-600"/>
              <span className="text-xl font-bold text-gray-800">E-ModernShop</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/category/electronics" className="text-gray-600 hover:text-indigo-600">
              Electrónica
            </Link>
            <Link to="/category/clothing" className="text-gray-600 hover:text-indigo-600">
              Indumentaria
            </Link>
            <Link to="/category/home" className="text-gray-600 hover:text-indigo-600">
              Artículos para el Hogar
            </Link>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;