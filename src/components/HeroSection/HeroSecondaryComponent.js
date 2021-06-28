import React from 'react';
import pitch from '../../icons/pitch.svg';
import { FaPlay } from 'react-icons/fa';

function HeroSecondaryComponent() {
   return (
      <div className='hero-secondary-container container'>
         <div className='hero-secondary'>
            <div className='hero-secondary__watch-container'>
               <img src={pitch} className='hero-secondary__image' alt='pitch' />
               <div className='hero-secondary__cta'>
                  <FaPlay />
                  <p>Click to watch</p>
               </div>
            </div>

            <div className='hero-secondary__text-container'>
               <div className='hero-secondary__heading'>Live Streaming</div>
               <p className='hero-secondary__text'>
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used
                  to demonstrate the visual form of a document or a typeface without relying on
                  meaningful content
               </p>
            </div>
         </div>
      </div>
   );
}

export default HeroSecondaryComponent;
