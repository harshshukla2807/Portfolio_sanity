import React from 'react';

import { About, Contact, Header, Skills,Experience, Testimonials, Work } from './container';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import Navigationsocials from './components/Navigationsocials/Navigationsocials';

const App = () => (
  <div className="app">
    <Navigationsocials/>
    <Navbar />
    <Header />
    <About />   
    <Skills />
    <Work />
    <Experience/>
    <Testimonials />
    <Contact />
  </div>
);

export default App;