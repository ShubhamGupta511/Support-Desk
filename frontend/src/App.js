import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <div className="container" >
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        </div>

       </Router>
    </>
    
   
  );
}

export default App;
