import React from 'react';
import sportsArray from '../../datas/sportsArray';

function SecondaryHeaderComponent({ active }) {
   return (
      <div
         className={`${
            active ? 'secondary-header-container--active' : 'secondary-header-container'
         }`}
      >
         <div className='container secondary-header'>
            <ul className='secondary-header__list'>
               {sportsArray.map((sport, index) => (
                  <li key={index} className='secondary-header__items'>
                     {sport}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}

export default SecondaryHeaderComponent;
