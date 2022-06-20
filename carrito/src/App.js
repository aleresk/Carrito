import './App.css';
import NavBar from './components/NavBar';
import Lista from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
                
      </header>
       
       <section>
          <Lista/>
       </section>
    </div>
  );
}

export default App;
