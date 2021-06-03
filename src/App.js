import logo from './logo.svg';
// import './App.css';
import Topbar from './components/topbar/topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import PortfolioList from './components/portfolioList/PortfolioList';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/testimonials';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer'
import './app.scss';
import { useState } from 'react';
// import { Menu } from '@material-ui/core';
import Menu from './components/menu/Menu';


function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>

        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contacts />
        <div className='footer'>
          <Footer />
        </div>



      </div>
    </div>


  );
}

export default App;
