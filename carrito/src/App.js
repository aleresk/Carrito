import './App.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  const onAdd = () => {
    return alert("Presionaste el botón Agregar al Carrito")
  }
  
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <NavBar/>
        
      </header>
      
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          
        </Routes>
      </BrowserRouter>
      <ItemCount Stock={5} Initial={1} onAdd={onAdd}/>
          <ItemDetailContainer/>
    </div>
  );
}

export default App;
