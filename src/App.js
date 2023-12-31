import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} exact>
          </Route>
          <Route path='/cart' element={<Cart />} exact>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
