import React from 'react';
import '../../App.css';
import CharacterCards from '../CharacterCards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Characters() {
  return (
    <>
      <HeroSection />
      <CharacterCards />
      <Footer />
    </>
  );
}

export default Characters;
