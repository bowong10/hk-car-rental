
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

import Home from './View/Home'
import Login from './View/Login'
import Register from './View/Register'
import Car from './View/Car'
import Booking from './View/Booking'
import Details from './View/Details'
// import Navbar from './components/Navbar';
import Headbar from './components/Headbar';

function App() {
  return (
    <Router>
      <Headbar />
      {/* <Navbar /> */}
     {/* <Header /> */}
      <main>
        <Routes>
          <Route exact path="/" element={<Home /> }/>
          <Route exact path="/Login" element={<Login />}/>
          <Route exact path="/Car" element={<Car />}/>
          <Route exact path="/Booking" element={<Booking />}/>
          <Route exact path="/Register" element={<Register />}/>
          <Route exact path="/Details" element={<Details />}/>
        </Routes>
      </main>
    </Router>

  );
}

export default App;
