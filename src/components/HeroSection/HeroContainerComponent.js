import React from 'react';
import HeroPrimaryComponent from './HeroPrimaryComponent';
import HeroSecondaryComponent from './HeroSecondaryComponent';

function HeroContainerComponent() {
   return (
      <div className='hero-container container'>
         <HeroPrimaryComponent />
         <HeroSecondaryComponent />
      </div>
   );
}

export default HeroContainerComponent;
