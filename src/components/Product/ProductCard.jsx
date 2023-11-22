import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import './ProductCard.css';

const ProductCard = ({ title, image, altText, onPurchase }) => {
  return (
    <Card style={{ width: '24rem' }}>
      <Card.Img as={Image} src={image} fluid={true} alt={altText} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>{title}</Card.Text>
        <Button onClick={onPurchase} variant='primary'>Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
