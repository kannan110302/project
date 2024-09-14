import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { addToCart } from './cartService';

const AddToCart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    const item = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
    };
    console.log('Adding item to cart:', item);
    try {
      await addToCart(item);
      alert('Item added to cart');
    } catch (error) {
      alert('Failed to add item to cart');
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AddToCart;
