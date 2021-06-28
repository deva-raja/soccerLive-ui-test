import React from 'react';
import StatsHeaderComponent from './StatsHeaderComponent';
import StatsPlayerComponent from './StatsPlayerComponent';
import StatsTeamPrimaryComponent from './StatsTeamPrimaryComponent';
import StatsTeamSecondaryComponent from './StatsTeamSecondaryComponent';

function StatisticsContainerComponent() {
   return (
      <div className='stats-container container'>
         <StatsHeaderComponent />
         <StatsTeamPrimaryComponent />
         <StatsTeamSecondaryComponent />
         <StatsPlayerComponent />
      </div>
   );
}

export default StatisticsContainerComponent;
