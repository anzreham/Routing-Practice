import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router} from '@reach/router'
import Home from './components/home.jsx'
import Number from './components/number.jsx'
import Hello from './components/hello.jsx'
import HelloClr from './components/helloClr.jsx'


function App() {
  return (
    <div className="container">
   

  
        <Router>
       
           <Home path  =  "home" />
           <Number path  =  "/:id" />
           <Hello path  =  "hello" />
           <HelloClr path  = "hello/:idt/:idb" />

         

        </Router>
        
    </div>
  );
}

export default App;
