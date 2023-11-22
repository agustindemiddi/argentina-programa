import './ProductDetails.css';

const ProductDetails = ({ description, price, sku, stock }) => {
  return (
    <div className='details'>
      <p>
        <strong>Descripción:</strong> {description}
      </p>
      <p>
        <strong>Precio:</strong> {price}
      </p>
      <p>
        <strong>SKU:</strong> {sku}
      </p>
      <p>
        <em>
          <strong>Cantidad disponible:</strong> {stock}
        </em>
      </p>
    </div>
  );
};
export default ProductDetails;
