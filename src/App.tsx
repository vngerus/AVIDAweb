import React from 'react';
import { Footer, Hero, Navbar } from "./components";
import Comunidad from './shared/Comunidad';
import CyC from './shared/CyC';
import Guia from './shared/Guia';
import JComunidad from './shared/JComunidad';
import Tienda from './shared/Tienda';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Comunidad />
        <CyC />
        <Guia />
        <JComunidad />
        <Tienda />
      </main>
      <Footer />
    </>
  );
};

export default App;
