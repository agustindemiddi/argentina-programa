import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import './ProductCard.css';

const ProductCard = ({ title, image, altText }) => {
  return (
    <Card style={{ width: '24rem' }}>
      <Card.Img as={Image} src={image} fluid={true} alt={altText} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>{title}</Card.Text>
        <Button variant='primary'>Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
