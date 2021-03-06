import React from 'react';
import './Cards.css';
import './CharacterCards.css';
import CardItem from './CardItem';
import { Button } from './Button';
import './HeroSection.css';

function CharacterCards() {
  return (
    <div className='cards'>
      <h1 className="inner">Starwars Characters</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
     {/* TWO BUTTONS WOULD BE HERE START */}
 <div className='charactercards-btns'>
    <div className="filter-view">
    <h2>FILTER</h2> 
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CLICK <i className='fas fa-angle-right' />
        </Button>
    </div>
       
    <div className="filter-view">
    <h2>VIEW</h2>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          VIEW <i className='fas fa-angle-right' />
        </Button>
    </div>
        
        </div>
     
     {/* TWO BUTTONS WOULD BE HERE  END*/}

          <ul className='cards__items'>
            <CardItem
              src='images/character-1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle with Luke'
              label='Luke Skywalker'
              path='/services'
            />
            <CardItem
              src='images/character-1.jpg'
              text='Travel through the Islands of Bali in a Private Cruise with Luke'
              label='Luke Skywalker'
              path='/services'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/character-2.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle Han Solo'
              label='Han Solo'
              path='/services'
            />
            <CardItem
              src='images/character-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise with Han Solo'
              label='Han Solo'
              path='/services'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/character-3.jpg'
              text='Experience the darkside of Lord Vader'
              label='Darth Vader'
              path='/services'
            />
            <CardItem
              src='images/character-3.jpg'
              text='Travel through the Islands of Bali in a Private Cruise with Darth Vader'
              label='Darth Vader'
              path='/services'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/character-4.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle with Lela'
              label='Princess Lela'
              path='/services'
            />
            <CardItem
              src='images/character-4.jpg'
              text='Travel through the Islands of Bali in a Private Cruise Princess Lela'
              label='Princess Lela'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CharacterCards;
