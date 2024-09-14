import React, { useEffect, useState } from 'react';
import { getCartItems } from './cartService';
import { ListGroup } from 'react-bootstrap';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await getCartItems();
        setCartItems(items);
      } catch (error) {
        alert('Error fetching cart items');
      }
    };

    fetchCartItems();
  }, []);

  return (
    <ListGroup>
      {cartItems.map((item) => (
        <ListGroup.Item key={item._id}>
          {item.name} - {item.quantity} x ${item.price}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};  

export default Cart;
