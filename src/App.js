import React from 'react';
import './App.css';
import Header from './components/Header'; // Ensure these files exist
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}

export default App;
