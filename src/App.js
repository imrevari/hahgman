import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters';

function App() {
  return (
    <div className="App">
      
        <img src={logo} className="App-logo" alt="logo" />
        <Letters selected={["B"]}/>
      
    </div>
  );
}

export default App;
