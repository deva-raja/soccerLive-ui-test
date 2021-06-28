import React from 'react';
import liverpool from '../../icons/liverpool.svg';
import manutd from '../../icons/manutd.svg';

function HeroPrimaryComponent() {
   return (
      <div className='hero-primary-container'>
         <div className='hero-primary'>
            <div className='hero-primary__match-container'>
               <div className='hero-primary__liverpool'>
                  <img src={liverpool} alt='liverpool logo' />
                  <p className='hero-primary__team'>Liverpool</p>
               </div>

               <div className='hero-primary__match-time'>
                  <div className='hero-primary__text--large'>2 Days to go</div>
                  <div className='hero-primary__time'>10:30 PM</div>
               </div>

               <div className='hero-primary__manutd'>
                  <img src={manutd} alt='manutd logo' />
                  <p className='hero-primary__team'>Man United</p>
               </div>
            </div>

            <div className='hero-primary__win-percentage-container'>
               <p className='hero-primary__win-text'>Winning Percentage?</p>
               <div className='hero-primary__win-bar'>
                  <div className='hero-primary__win-left'></div>
                  <div className='hero-primary__win-middle'></div>
                  <div className='hero-primary__win-right'></div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HeroPrimaryComponent;
