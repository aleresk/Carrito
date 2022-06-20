import './App.css';
import NavBar from './components/NavBar';
import Lista from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Lista greeting ="Este es el listado de mis productos"/>
      </header>
       
    </div>
  );
}

export default App;
