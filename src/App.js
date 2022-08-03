import './App.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { createContext } from 'react';

export const cartContext = createContext(null);

function App() {
 
  
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <NavBar/>
        
      </header>
      
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
