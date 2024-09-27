import logo from './logo.svg';
import './App.css';
import './Hello.css';
import Hello from './Hello';  // Hello 컴포넌트 import

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />  {/* Hello 컴포넌트 사용 */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
