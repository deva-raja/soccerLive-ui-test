import React from 'react';
import StatsTeamListComponent from './utils/StatsTeamListComponent';
import datas from '../../datas/liverpoolStats';

function StatsTeamPrimaryComponent() {
   return (
      <div className='stats-team-primary-container bdr-radius'>
            <StatsTeamListComponent datas={datas} />
      </div>
   );
}

export default StatsTeamPrimaryComponent;
