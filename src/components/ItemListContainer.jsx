import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList/ProductList';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  
  const categoryNames = {
    electronics: 'Electrónica',
    clothing: 'Indumentaria',
    home: 'Artículos para el Hogar'
  };

  const renderCategoryHeader = () => {
    if (!categoryId) return null;
    return (
      <h2 className="text-xl text-gray-600 mb-6">
        {categoryNames[categoryId] || categoryId}
      </h2>
    );
  };


 // Componente ItemListContainer:
//-Se renderiza debajo de NavBar y como hijo de App.
//-Renderiza un texto que se le es asignado como
//props

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{greeting}</h1>
      {renderCategoryHeader()}
      <ProductList categoryId={categoryId} />
    </div>
  );
};

export default ItemListContainer;