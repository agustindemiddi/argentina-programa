import ProductCard from './components/Product/ProductCard';
import ProductDetails from './components/Product/ProductDetails';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const dummyImage =
  'https://www.codetee.com/cdn/shop/products/DynamicImageHandler_d87c6f52-71a6-48d0-8e3d-0a684fdc8f35.png?v=1524571709';

const App = () => {
  return (
    <article className='product'>
      <ProductCard
        title='Remera Negra'
        image={dummyImage}
        altText='Imagen de remera negra simpaticona'
      />
      <ProductDetails
        description='Remera simpaticona, 100% de algodón y 100%
        de efectividad anticonceptiva'
        price='$ 8.900,00'
        sku='UGG-BB-PUR-06'
        stock='3 unidades'
      />
    </article>
  );
};

export default App;
