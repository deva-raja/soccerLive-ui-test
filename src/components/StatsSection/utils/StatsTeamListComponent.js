import React from 'react';

function StatsTeamListComponent({ datas }) {
   return (
      <div className='stats-team'>
         <ul className='stats-team__list'>
            {datas.map((data, index) => (
               <li key={index} className='stats-team__items'>
                  <div className={`stats-team__items-wrapper stats-team__items-wrapper-${index} `}>
                     <div className='stats-team__name '>
                        <p className={`stats-team__team-text-${index}`}>{data[0]}</p>
                     </div>
                     <div className='stats-team__info'>
                        <p>{data[1]}</p>
                        <p>{data[2]}</p>
                        <p>{data[3]}</p>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default StatsTeamListComponent;
