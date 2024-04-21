import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import ThingsToRead from './pages/ThingsToRead';
import {Route, Routes} from "react-router-dom"

function App() {


  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/thingstoread" element={<ThingsToRead/>}/>
        </Routes>
      </div>
      
    </>
  );
}

export default App;
