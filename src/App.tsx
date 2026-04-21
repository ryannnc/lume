import Home from './pages/home';
import Product from './pages/product';
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom';
import Account from './pages/account';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/account" element = {<Account/>} />
      </Routes>
    </>
  )
}

export default App;