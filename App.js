
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import Rsecond from './components/rsecond/rsecond';

import { BrowserRouter as Router,  Routes,  Route } from "react-router-dom";

function App() {
  return (
     <Router>
    <div className="App">
     
     
        <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/second" element={<Rsecond />}/>
          {/* <Route exact path="/">></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route> */}
        </Routes>
      
   
    </div>
     </Router>
  );
}

export default App;
