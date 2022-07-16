import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/Notification'



function App() {
    
    return (
        <div className="App">
            <NotificationProvider>
                <CartProvider>
                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route path='/' element={<ItemListContainer />}/>
                            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
                            <Route path='/cart' element={<CartContainer />} />
                            <Route path='/checkout' element={<Checkout />} />
                        </Routes>
                    </BrowserRouter>
                </CartProvider>
            </NotificationProvider>
        </div>
    );
}

export default App;
