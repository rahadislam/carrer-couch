import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import CheakOut from './components/CheakOut/CheakOut';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/cheakout' element={<CheakOut></CheakOut>}></Route>
     </Routes>
    </>
  );
}

export default App;
