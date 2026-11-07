import React from 'react';
import Header from "./component/Header"; 
import Home from "./pages/home";
import Showcase from "./pages/showcase";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./component/Footer"; 

function App() {
  return (
    <>
      <Header /> 
      <main>
        <Home />
        <Showcase />
        <About />
        <Contact />
      </main>
      <Footer /> 
    </>
  );
}

export default App;
