import React, { useState } from 'react';
import StatsHeaderComponent from './StatsHeaderComponent';
import StatsPlayerComponent from './StatsPlayerComponent';
import StatsTeamComponent from './StatsTeamComponent';

function StatisticsContainerComponent() {
   const [teamPrimaryClass, setTeamPrimaryClass] = useState(
      'stats-team-primary-container bdr-radius '
   );
   const [teamSecondaryClass, setTeamSecondaryClass] = useState(
      'stats-team-secondary-container bdr-radius '
   );

   return (
      <div className='stats-container container'>
         <StatsHeaderComponent />
         <StatsTeamComponent
            classNames={teamPrimaryClass}
            setTeamPrimaryClass={setTeamPrimaryClass}
         />
         <StatsTeamComponent
            classNames={teamSecondaryClass}
            setTeamSecondaryClass={setTeamSecondaryClass}
         />
         <StatsPlayerComponent />
      </div>
   );
}

export default StatisticsContainerComponent;
