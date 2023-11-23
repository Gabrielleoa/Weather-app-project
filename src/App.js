import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contacts from './pages/Contacts'
import AboutUs from './pages/AboutUs'
function App() {
 

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path="/Contacts" element={<Contacts/>}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;