// Simulated product data
const mockProducts = [
  // Electronics Category
  {
    id: 1,
    name: "Auriculares Inalámbricos",
    price: 99.99,
    description: "Auriculares inalámbricos de alta calidad con cancelación de ruido. Incluye Bluetooth 5.0, 30 horas de batería y controladores de audio premium para una experiencia de escucha inmersiva. Perfecto para amantes de la música y profesionales.",
    image: "",
    category: "electronics"
  },
  {
    id: 4,
    name: "Reloj Inteligente",
    price: 199.99,
    description: "Reloj inteligente avanzado con funciones de seguimiento de salud, GPS y notificaciones de smartphone. Diseño resistente al agua con pantalla OLED vibrante y batería de 5 días de duración.",
    image: "",
    category: "electronics"
  },
  {
    id: 5,
    name: "Altavoz Portátil",
    price: 79.99,
    description: "Altavoz Bluetooth portátil resistente al agua con sonido de 360 grados. Perfecto para actividades al aire libre con 20 horas de batería y micrófono incorporado para llamadas.",
    image: "",
    category: "electronics"
  },
  {
    id: 6,
    name: "Cargador Inalámbrico",
    price: 39.99,
    description: "Base de carga inalámbrica rápida compatible con todos los dispositivos Qi. Diseño elegante con indicadores LED y protección contra sobrecarga.",
    image: "",
    category: "electronics"
  },

  // Clothing Category
  {
    id: 2,
    name: "Camiseta de Algodón",
    price: 24.99,
    description: "Cómoda camiseta de algodón en varios colores. Fabricada con 100% algodón orgánico, esta camiseta transpirable y suave es perfecta para el uso diario. Disponible en tallas S hasta XXL.",
    image: "",
    category: "clothing"
  },
  {
    id: 7,
    name: "Campera Vaquera",
    price: 89.99,
    description: "Campera jeans clásica con ajuste moderno. Fabricada con tela jeans de primera calidad con elasticidad cómoda y acabado vintage.",
    image: "",
    category: "clothing"
  },
  {
    id: 8,
    name: "Zapatillas Deportivas",
    price: 129.99,
    description: "Zapatillas de running ligeras con amortiguación reactiva. Parte superior de malla transpirable y suela exterior de goma duradera para máxima comodidad y rendimiento.",
    image: "",
    category: "clothing"
  },
  {
    id: 9,
    name: "Bufanda de Invierno",
    price: 34.99,
    description: "Bufanda de invierno suave y cálida fabricada con mezcla de lana premium. Perfecta para el clima frío con diseño elegante y múltiples opciones de color.",
    image: "",
    category: "clothing"
  },

  // Home Category
  {
    id: 3,
    name: "Lámpara de Escritorio Moderna",
    price: 49.99,
    description: "Lámpara LED de escritorio ajustable con múltiples niveles de brillo. Cuenta con controles táctiles, brazo flexible y bombillas LED de bajo consumo. Perfecta para tu oficina en casa o rincón de lectura.",
    image: "",
    category: "home"
  },
  {
    id: 10,
    name: "Maceta de Cerámica",
    price: 29.99,
    description: "Maceta de cerámica minimalista con orificio de drenaje y platillo. Perfecta para plantas de interior con elegante acabado mate.",
    image: "",
    category: "home"
  },
  {
    id: 11,
    name: "Manta Decorativa",
    price: 45.99,
    description: "Manta suave y acogedora fabricada con microfibra premium. Perfecta para acurrucarse en el sofá con patrones de diseño elegantes.",
    image: "",
    category: "home"
  },
  {
    id: 12,
    name: "Reloj de Pared",
    price: 59.99,
    description: "Reloj de pared moderno con mecanismo silencioso. Diseño elegante con números fáciles de leer y acabado premium.",
    image: "",
    category: "home"
  }
];

export const getProducts = async (categoryId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (categoryId) {
    return mockProducts.filter(product => product.category === categoryId);
  }
  
  return mockProducts;
};

export const getProduct = async (productId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return mockProducts.find(product => product.id === parseInt(productId));
};