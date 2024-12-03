import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Store, Menu as MenuIcon } from 'lucide-react'; // Importa el ícono de hamburguesa
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Store className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">E-ModernShop</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
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

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <MenuIcon className="h-6 w-6" /> {/* Ícono de hamburguesa */}
            </button>
            <CartWidget className="ml-2" />
          </div>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      <div
        className={`md:hidden transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ maxHeight: isOpen ? '200px' : '0', overflow: 'hidden' }} // Controla la altura máxima
      >
        <div className="flex flex-col bg-white shadow-lg">
          <Link to="/category/electronics" className="px-4 py-2 text-gray-600 hover:text-indigo-600">
            Electrónica
          </Link>
          <Link to="/category/clothing" className="px-4 py-2 text-gray-600 hover:text-indigo-600">
            Indumentaria
          </Link>
          <Link to="/category/home" className="px-4 py-2 text-gray-600 hover:text-indigo-600">
            Artículos para el Hogar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;