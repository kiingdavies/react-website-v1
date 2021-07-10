import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './HeroSection.css';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img className='cards__item__img' alt='' src={props.src}/>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>

          {/* <div className='hero-btns'> */}
          
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            READ MORE    <i className='fas fa-arrow-right' />
          </Button>
        {/* </div> */}

        </Link>

         
      </li>
     
    </>
  );
}

export default CardItem;
