// import logo from './images/logo.svg';
import './App.css';
// import MenuComponent from './components/menu';
import Dashboard from './components/dashhboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <MenuComponent /> */}
        <Dashboard />
        {/* <img src={logo} className="App-logo" alt="logo" />
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
