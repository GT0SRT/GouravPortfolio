import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="p-8">
        <Home />
        <About />
        <Education />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
