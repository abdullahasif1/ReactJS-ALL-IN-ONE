
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';


function App() {
  
  return (
    <div className="App">
       <Message/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and chill
        </a>
      </header> */}

      {/* <Greet name='Abdullaaaaah'/>
      <Welcome> <p>Im a child</p></Welcome> */}
     
    </div>
  );
}

export default App;
