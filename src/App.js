import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Checkout from './components/Checkout';
import Shop from './components/Shop';
import CartContextProvider from './context/CartContext';

function App() {
    return (
        <CartContextProvider>
            <Header />
            <Routes>
                <Route path='/' element={<Shop />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </CartContextProvider>
    );
}

export default App;
