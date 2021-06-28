import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { MdNavigateNext } from 'react-icons/md';

function HeroHeaderComponent() {
   return (
      <div className='hero-header-container container'>
         <div className='hero-header'>
            <IoMdHome className='home-icon' />
            
            <MdNavigateNext className='navigate-next-icon' />

            <p className='hero-header__text-large'>England</p>
            <MdNavigateNext className='navigate-next-icon' />

            <p className='hero-header__text-large'>Premier League</p>
            <MdNavigateNext className='navigate-next-icon' />

            <p className='hero-header__text-small'>Liverpool v Manchester United</p>
         </div>
      </div>
   );
}

export default HeroHeaderComponent;
