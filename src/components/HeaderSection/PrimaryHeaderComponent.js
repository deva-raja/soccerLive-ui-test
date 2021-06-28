import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import Bell from '../../icons/bell.svg';
import SoccerLive from '../../icons/soccerlive.svg';

function PrimaryHeaderComponent({ setActive }) {
   const handleClick = () => {
      setActive((prevState) => !prevState);
   };
   return (
      <div className='primary-header-container '>
         <div className='container primary-header'>
            <div className='primary-header__logo-container'>
               <img className='soccerlive-icon' src={SoccerLive} alt='soccerlive logo' />
               <span className='primary-header__span--large'>Soccerlive</span>
            </div>

            <div className='primary-header__search-input-container'>
               <AiOutlineSearch className='search-icon' />
               <input type='text' placeholder='Search' className='primary-header__search-input' />
            </div>

            <div className='primary-header__notification-container'>
               <img className='bell-icon' src={Bell} alt='bell icon' />
               <span className='primary-header__span--small'>Notifications</span>
            </div>

            <div className='hamburger' onClick={handleClick}>
               <FiMenu className='hamburger-icon' />
            </div>
         </div>
      </div>
   );
}

export default PrimaryHeaderComponent;
