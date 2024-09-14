import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cart';

// Add item to cart
export const addToCart = async (item) => {
  try {
    const response = await axios.post(`${API_URL}/add`, item, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Axios error:', error.response || error.message);  // Log Axios error details
    throw error;
  }
};

// Fetch cart items
export const getCartItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart items:', error.response || error.message);  // Log Axios error details
    throw error;
  }
};
