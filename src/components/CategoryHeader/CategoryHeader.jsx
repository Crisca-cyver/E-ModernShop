import React from 'react';

const CategoryHeader = ({ categoryId }) => {
  if (!categoryId) return null;

  const categoryNames = {
    electronics: 'Electrónica',
    clothing: 'Indumentaria',
    home: 'Artículos para el Hogar'
  };

  return (
    <h2 className="text-xl text-gray-600 mb-4 text-center">
      {categoryNames[categoryId] || categoryId}
    </h2>
  );
};

export default CategoryHeader;