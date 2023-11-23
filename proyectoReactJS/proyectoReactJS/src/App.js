import logo from './logo.svg';
import './App.css';
import Listado from './components/Listado.js'

const listaObjetos = [
  { id: 1, propiedad1: 'Valor1A', propiedad2: 'Valor1B', propiedad3: 'Valor1C' },
  { id: 2, propiedad1: 'Valor2A', propiedad2: 'Valor2B', propiedad3: 'Valor2C' },
  { id: 3, propiedad1: 'Valor3A', propiedad2: 'Valor3B', propiedad3: 'Valor3C' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>MY DEMO</h1>
        <Listado objetos={listaObjetos}></Listado>
      </header>
    </div>
  );
}

export default App;
