import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList/ProductList';
import CategoryHeader from './CategoryHeader/CategoryHeader';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  return (
    //Componente ItemListContainer:
//-Se renderiza debajo de NavBar y como hijo de App.
//-Renderiza un texto que se le es asignado como
//props

    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{greeting}</h1>
      <CategoryHeader categoryId={categoryId} />
      <ProductList categoryId={categoryId} />
    </div>
  );
};

export default ItemListContainer;