import React, { Component } from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';
import Notfound from './Notfound/Notfound';
import Footer from './Footer/Footer';

export class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Portfolio /> }></Route>
        <Route path='/portfolio' element={ <Portfolio /> }></Route>
        <Route path='/about' element={ <About /> }></Route>
        <Route path='/contact' element={ <Contact /> }></Route>
        <Route path='*' element={ <Notfound /> }></Route>
      </Routes>
      <Footer />
      </>
    )
  }
}

export default App