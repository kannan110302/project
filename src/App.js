import './App.css';
import CustomNavbar from './HomePage';
import SignIn from './SignIn';
import CoursesSection from './Cards';
import ButtonSlider from './Test';
import Banner from './Banner';

function App() {
  return (
    <>
     
     <div className="App">

      
      <CustomNavbar />
      <CoursesSection />  
      <Banner />


      {/* <ButtonSlider /> */}
      {/* <SignIn /> */}
      
    </div>

    </>
  );
}

export default App;