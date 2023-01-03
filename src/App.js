
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';


function App() {
  
  return (
    <div className="App">

      {/* <Counter/> */}
      {/* <Message/> */}

       <Greet name='Abdullaaaaah' heroName="Batman"/>
      <Welcome name="Ali Khan" heroName="Pathan"> <p>Im a child</p></Welcome>
     








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
    </div>
  );
}

export default App;
