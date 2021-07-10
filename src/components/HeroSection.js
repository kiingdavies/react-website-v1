import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import SearchBar from "./SearchBar";

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <img className='hero-img' src='images/hero-banner.jpg' />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED 
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        
      </div> */}

       {/* <SearchBar placeholder="Enter a Book Name..." data={BookData} /> */}
         <SearchBar placeholder="Enter a Search Name..." />
    </div>
  );
}

export default HeroSection;
