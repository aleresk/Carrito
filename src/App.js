import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Hello World!
        </p> 
       <p>
       Esta es una nueva app para el curso de React.Js con Guille
       </p>

       </header>
    </div>
  );
}

export default App;
