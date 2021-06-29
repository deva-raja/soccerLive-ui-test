import React from 'react';
import WinIcon from '../../../icons/win.svg';
import ManCityIcon from '../../../icons/mancity.svg';
import LiverpoolIcon from '../../../icons/liverpool.svg';

function ResultCardComponent() {
   return (
      <div className='result-card bdr-radius'>
         <div className='result-card__result'>
            <img className='icon--small' src={WinIcon} alt='win icon' />
            <p>Man City</p>
            <img className='icon--medium' src={ManCityIcon} alt='mancity icon' />
            <div className='result-card__show-result'>
               <p className='result-card__result--heading'>3</p>
               <p className='result-card__ft'>FT</p>
               <p className='result-card__result--heading'>1</p>
            </div>
            <img className='icon--medium' src={LiverpoolIcon} alt='liverpool icon' />
            <p>Liverpool</p>
         </div>
      </div>
   );
}

export default ResultCardComponent;
