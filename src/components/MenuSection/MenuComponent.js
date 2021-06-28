import React from 'react';

function MenuComponent() {
   return (
      <div className='menu-container container'>
         <div className='menu'>
            <div className='menu__item1 menu--text'>Match Info</div>
            <div className='menu__item2 menu--text'>Standings</div>
            <div className='menu__item3 menu--text'>Live Match</div>
         </div>
      </div>
   );
}

export default MenuComponent;
