// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import Landing from './Pages/Landing/Landing';
// import './App.css';
// import Footer from './Feature/Movie/Footer/Footer';

// import { Navbar } from './Feature/Shared/Navbar/Navbar';



// import Try from './Try/Try';
import { ToastContainer } from 'react-toastify';
import Navbar from './Component/Navbar/Navbar';
import Product from './Pages/Product/Product';


function App() {


  return (

    <div className="App">
    <div className="container-fluid fixed-top " >
    <Navbar />
    </div>
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/' element={<Landing />} />
        <Route path='/product' element={<Product/>}/>

      </Routes>

      {/* <Footer/>  */}
    </div>


  );
}

export default App;