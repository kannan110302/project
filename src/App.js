import './App.css';
import CustomNavbar from './HomePage';
import SignIn from './SignIn';
//import CoursesSection from './Cards';
import ButtonSlider from './Test';
//import Banner from './Banner';
//import HowItWorks from './Certificate';
import Testimonials from './Testimonials';
import Courses from './Tips';
//import Apps from './Apps';
import AddToCart from './AddToCart';
import Cart from './Cart';
 

function App() { 
  // const products = [
  //   { id: '1', name: 'Product 1', price: 29.99 },
  //   { id: '2', name: 'Product 2', price: 39.99 },
  //   { id: '3', name: 'Product 3', price: 49.99 },
  //   { id: '4', name: 'Product 4', price: 19.99 },
  //   { id: '5', name: 'Product 5', price: 59.99 },
  // ];
  return (
    <>
     
     <div className="App">
      
      {/* <h1>Product List</h1>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <AddToCart key={product.id} product={product} />
        ))}
      </div> 
          
      <h2>Your Cart</h2>
      <Cart /> */}
         <CustomNavbar />    
      {/* <HowItWorks /> */}
          {/* <Testimonials /> */}
      {/* <CoursesSection />   */}
      {/* <Banner /> */}
           {/* <Courses /> */}

      {/* <ButtonSlider /> */}
      {/* <SignIn /> */}
      
    </div>

    </>
  );
}

export default App;