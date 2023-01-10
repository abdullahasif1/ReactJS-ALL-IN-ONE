
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';


function App() {
  
  return (
    <div className="App">

      <ClickCounter/>
      <HoverCounter/>



      {/* <ErrorBoundary>
        <Hero heroname={'Batman'}/>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero heroname={'Superman'}/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroname={'Joker'}/>
      </ErrorBoundary> */}
      
      
      {/* <FRParentInput/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}


      {/* <ParentComp/> */}
      {/* <PureComp/> */}


      {/* <Table/> */}
      {/* <FragmentDemo/> */}

      {/* <LifeCycleA/> */}
     
     
      {/* <Form/> */}
      
      
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/> */}

      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/>  */}

      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name='Abdullah' heroName="Batman"/>
      <Welcome name="Ali Khan" heroName="Pathan"> <p>Im a child</p></Welcome> */}
    




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
