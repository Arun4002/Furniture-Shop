import AboutUs from './componet/Aboutus';
import './App.css';
import Login from './componet/login';
import Register from './componet/Register';
import Sofas from './componet/sofas';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './componet/home';
import SearchAppBar from './componet/bootnav';
import Footer from './componet/footer';
import SignUp from './componet/Register';
import SignIn from './componet/login';
import Dining from './componet/dining';
function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <Router>
     <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/r' element={<SignUp/>} />
      <Route path='/a' element={<AboutUs/>} />
      <Route path='/sofa' element={<Sofas/>} />
      <Route path='/dining' element={<Dining/>} />
      

     </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;