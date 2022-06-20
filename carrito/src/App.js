import './App.css';
import NavBar from './components/NavBar';
import Lista from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
function App() {
  const onAdd = () => {
    return alert("Presionaste el botón comprar")
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Lista greeting ="Este es el listado de mis productos"/>
      </header>

      <ItemCount Stock={5} Initial={1} onAdd={onAdd}/>
    </div>
  );
}

export default App;
