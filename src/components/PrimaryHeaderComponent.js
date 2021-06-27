import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import Bell from '../icons/bell.svg';
import SoccerLive from '../icons/soccerlive.svg';

function PrimaryHeaderComponent() {
   return (
      <div className='primary-header-container '>
         <div className='container primary-header'>
            <img className='soccerlive-icon' src={SoccerLive} alt='soccerlive logo' />
            <div className='primary-header__search-container'>
               <AiOutlineSearch className='search-icon' />
               <span>Search</span>
            </div>
            <div className='primary-header__notification-container'>
               <img className='bell-icon' src={Bell} alt='bell icon' />
               <span>Notifications</span>
            </div>
            <div className='hamburger'>
               <GiHamburgerMenu className='hamburger-icon' />
            </div>
         </div>
      </div>
   );
}

export default PrimaryHeaderComponent;
