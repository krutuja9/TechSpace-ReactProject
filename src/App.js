import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './componenets/Header';
import Home from './componenets/Home';
import Footer from './componenets/Footer';
import Contact from './componenets/Contact';
import Services from './componenets/Services';

import "./styles/App.scss"
import './styles/Header.scss'
import './styles/Home.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/mediaquery.scss'





function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path ="/contact" element={<Contact/>}/>
        <Route path='/services' element={<Services/>} />
      </Routes>
    
      <Footer/>
    </Router>


  );
}

export default App;
