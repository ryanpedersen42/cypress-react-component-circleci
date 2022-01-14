import logo from './circle_logo.png';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <p>
        Cypress component testing in CircleCI
      </p>
      <Button>A simple button</Button>
    </div>
  );
}

export default App;
