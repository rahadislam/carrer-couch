import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import CheakOut from './components/CheakOut/CheakOut';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PageNotFound from './components/PageNotFound.js/PageNotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/cheakout' element={
       <RequireAuth>
         <CheakOut></CheakOut>
       </RequireAuth>
       }></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
       
     </Routes>
     <Footer></Footer>
    </>
  );
}

export default App;
