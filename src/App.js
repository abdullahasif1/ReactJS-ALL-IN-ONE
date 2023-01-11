
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
import Counter2 from './Components/Counter2';
import ClickCounter2 from './Components/ClickCounter2';
import HoverCounter2 from './Components/HoverCounter2';
import User from './Components/User';
import ComponentC from './Components/ComponentC'
import { UserProvide } from './Components/userContext';
import PostList from './Components/PostList';


function App() {
  
  return (
    <div className="App">
      <PostList />


      {/* <UserProvide value ="Abdullah">
        <ComponentC />
      </UserProvide> */}


      {/* <User name={(isLoggedIn) => isLoggedIn ? 'Abdullah' : 'Guest'} /> */}
      {/* <Counter2 render={(count, increamentCount)=>(<ClickCounter2 count={count} increamentCount={increamentCount}/>
      )}/>
      <Counter2 render={(count, increamentCount)=>(<HoverCounter2 count={count} increamentCount={increamentCount}/>
      )}/> */}

      {/* <ClickCounter name='Abdullah'/>
      <HoverCounter/> */}



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
