import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { MdNavigateNext } from 'react-icons/md';

function HeroHeaderComponent() {
   return (
      <div className='hero-header-container'>
         <div className='container hero-header'>
            <IoMdHome />
            <MdNavigateNext />
            <p>England</p>
            <MdNavigateNext />
            <p>Premier League</p>
            <MdNavigateNext />
            <p>Liverpool v Manchester United</p>
         </div>
      </div>
   );
}

export default HeroHeaderComponent;
