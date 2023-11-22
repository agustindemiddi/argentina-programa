import { useRef, useEffect, useState } from 'react';

import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';

import './Product.css';

const dummyImage =
  'https://www.codetee.com/cdn/shop/products/DynamicImageHandler_d87c6f52-71a6-48d0-8e3d-0a684fdc8f35.png?v=1524571709';

const Product = () => {
  const [stock, setStock] = useState(5);
  const [isPurchased, setIsPurchased] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (!isInitialRender) {
      setIsPurchased(true);
      const timer = setTimeout(() => setIsPurchased(false), 2000);
      return () => clearTimeout(timer);
    } else {
      setIsInitialRender(false);
    }
  }, [stock]);

  const handlePurchase = () => {
    if (stock <= 0) {
      alert('No hay stock del producto seleccionado');
      return;
    };

    setStock((prevState) => prevState - 1);
  };

  return (
    <article className='product'>
      <ProductCard
        title='Remera Negra'
        image={dummyImage}
        altText='Imagen de remera negra simpaticona'
        onPurchase={handlePurchase}
      />
      {isPurchased ? <p className='alert'>Gracias por su compra!</p> : null}
      <ProductDetails
        description='Remera simpaticona, 100% de algodón'
        price='$ 8.900,00'
        sku='UGG-BB-PUR-06'
        stock={`${stock} unidades`}
      />
    </article>
  );
};

export default Product;
