import './App.css';
import NavBar from './components/NavBar';
import Lista from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
function App() {
  const onAdd = () => {
    return alert("Presionaste el botón Agregar al Carrito")
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        
      </header>
      
      <ItemListContainer/>
      <ItemCount Stock={5} Initial={1} onAdd={onAdd}/>
      
    </div>
  );
}

export default App;
