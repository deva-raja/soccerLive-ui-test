import React from 'react';

function StatsPlayerDetailsListComponent({ datas }) {
   return (
      <div className='stats-player-details'>
         <ul className='stats-player-details__list  stats-player--spacing--low'>
            {datas.map((data, index) => (
               <li key={index} className='stats-player-details__items'>
                  {data}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default StatsPlayerDetailsListComponent;
