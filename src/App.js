//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComp from './components/PrivateComp';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProd from './components/UpdateProd';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
       <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route element={<PrivateComp/>}> 
        <Route path='/' element={ <ProductList/>}/> 
        <Route path='/add' element={<AddProduct/>}/> 
        <Route path='/update/:id' element={ <UpdateProd/>}/> 
        <Route path='/logout' element={ <h1> Logout Components </h1>}/> 
        <Route path='/delete' element={ <h1> Delete Components </h1>}/> 
        <Route path='/profile' element={ <h1> Profile Components </h1>}/> 
        </Route>

        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={ <Login/>}/> 
      </Routes>
      <Footer /> 
       </BrowserRouter>  
    </div>
  );
}
export default App;

 