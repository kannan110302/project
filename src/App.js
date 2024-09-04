import './App.css';
import CustomNavbar from './HomePage';
import SignIn from './SignIn';
import CoursesSection from './Cards';
import ButtonSlider from './Test';

function App() {
  return (
    <>
     
     <div className="App">
     <CustomNavbar />
      <CoursesSection />
      {/* <ButtonSlider /> */}
      
      {/* <SignIn /> */}
      
    </div>

    </>
  );
}

export default App;