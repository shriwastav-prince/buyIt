import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home_page/home';
import Navbar from './components/Navbar_page/Navbar';
import Category from './components/Categories/category';
import Login from './components/Login_Page/Login'
import Signup from './components/SignUp-Page/Signup';
import Contact from './components/ContactUS/Contact'
import About from './components/AboutUs/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route>
            <Route path='/' element={<div><Navbar/> <Category/> <Home/></div>} />
            <Route path='login' element={<Login/>} />
            <Route path='signup' element={<Signup/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='about' element={<About/>} />

          </Route>
          
        </Routes>

      </BrowserRouter>
      
    </>
  );
}

export default App;
