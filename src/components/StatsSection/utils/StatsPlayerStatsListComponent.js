import React from 'react';

function StatsPlayerStatsListComponent({ datas }) {
   console.log(datas);
   return (
      <div className='stats-player-records'>
         <ul className='stats-player-records__list'>
            {datas.map((data, index) => (
               <li key={index} className='stats-player-records__items'>
                  <div className={'stats-player-records__items-wrapper stats-player--spacing--low'}>
                     <div className='stats-player-records__name-wrapper'>
                        <p className='stats-player-records_no'>{data[0]}</p>
                        <p className='stats-player-records_name'>{data[1]}</p>
                     </div>
                     <div className='stats-player-records__info'>
                        <p>{data[2]}</p>
                        <p>{data[3]}</p>
                        <p>{data[4]}</p>
                        <p>{data[5]}</p>
                        <p>{data[6]}</p>
                        <p className='stats-player-records__ratings'>{data[7]}</p>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default StatsPlayerStatsListComponent;
