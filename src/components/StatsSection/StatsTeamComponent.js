import React from 'react';
import StatsTeamListComponent from './utils/StatsTeamListComponent';
import Livdatas from '../../datas/liverpoolStats';
import Mandatas from '../../datas/manutdStats';

function StatsTeamComponent({ classNames }) {
   const datas = classNames.includes(`stats-team-secondary-container`) ? Mandatas : Livdatas;

   return (
      <div className={`${classNames}`}>
         <StatsTeamListComponent datas={datas} />
      </div>
   );
}

export default StatsTeamComponent;
