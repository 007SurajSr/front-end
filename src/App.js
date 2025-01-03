//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
       <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path='/' element={ <h1> E-Dashboard </h1>}/> 
        <Route path='/add' element={ <h1> Add Product Components </h1>}/> 
        <Route path='/update' element={ <h1> Update Product Components </h1>}/> 
        <Route path='/logout' element={ <h1> Logout Components </h1>}/> 
        <Route path='/delete' element={ <h1> Delete Components </h1>}/> 
        <Route path='/profile' element={ <h1> Profile Components </h1>}/> 
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      
       </BrowserRouter>  
    </div>
  );
}
export default App;

 