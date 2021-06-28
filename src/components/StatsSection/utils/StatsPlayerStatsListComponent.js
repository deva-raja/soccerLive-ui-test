import React from 'react';

function StatsPlayerStatsListComponent({ datas }) {
   console.log(datas);
   return (
      <div className='stats-player-records'>
         <ul className='stats-player-records__list  '>
            {datas.map((data, index) => (
               <li key={index} className='stats-player-records__items  '>
                  <div className={'stats-player-records__items-wrapper stats-player--spacing--low'}>
                     <div className='stats-team__name '>
                        <p className={`stats-team__team-text-${index}`}>{data[0]}</p>
                        <p>{data[1]}</p>
                     </div>
                     <div className='stats-team__info'>
                        <p>{data[2]}</p>
                        <p>{data[3]}</p>
                        <p>{data[4]}</p>
                        <p>{data[5]}</p>
                        <p>{data[6]}</p>
                        <p>{data[7]}</p>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default StatsPlayerStatsListComponent;
