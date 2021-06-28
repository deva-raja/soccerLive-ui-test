import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import attributesArray from '../../datas/attributesArray';
import playerDetails from '../../datas/playerDetailsArray';
import playerStats from '../../datas/playerStats';
import StatsPlayerDetailsListComponent from './utils/StatsPlayerDetailsListComponent';
import StatsPlayerStatsListComponent from './utils/StatsPlayerStatsListComponent';

function StatsPlayerComponent() {
   console.log(playerStats);
   return (
      <div className='stats-player-container bdr-radius'>
         <div className='stats-player'>
            {/* Headers */}
            <div className='stats-player__header stats-player--spacing'>
               <h2 className='stats-player__heading'>Player Statistics</h2>
               <div className='stats-player__right'>
                  <p className='stats-player__heading-text'>Accumulation</p>
                  <div className='stats-player__heading-button'>
                     <p className='stats-player__button-text'>All</p>
                     <AiFillCaretDown />
                  </div>
               </div>
            </div>

            {/* Menu */}
            <div className='stats-player__menu-container stats-player--spacing '>
               <ul className='stats-player__list-container'>
                  {attributesArray.map((data, index) => (
                     <li key={index} className='stats-player__list-items'>
                        {data}
                     </li>
                  ))}
               </ul>
            </div>

            {/* List of Player stats */}
            <StatsPlayerDetailsListComponent datas={playerDetails} />

            {/* List of Player details */}
            <StatsPlayerStatsListComponent datas={playerStats} />
         </div>
      </div>
   );
}

export default StatsPlayerComponent;
