import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import CategoryHeader from '../CategoryHeader/CategoryHeader';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{greeting}</h1>
      <CategoryHeader categoryId={categoryId} />
      <ProductList categoryId={categoryId} />
    </div>
  );
};

export default ItemListContainer;