import React from 'react';
import ResultCardComponent from './utils/ResultCardComponent';

function HeadToHeadContainerComponent() {
   return (
      <div className='h-to-h-container container bdr-radius'>
         <div className='h-to-h'>
            <h2 className='h-to-h__heading'>Head to Head</h2>
            <div className='h-to-h__card-container'>
               <div>
                  <ResultCardComponent />
               </div>
               <div>
                  <ResultCardComponent />
               </div>
               <div>
                  <ResultCardComponent />
               </div>
            </div>
            <div className='h-to-h__card-container'>
               <div>
                  <ResultCardComponent />
               </div>
               <div>
                  <ResultCardComponent />
               </div>
               <div>
                  <ResultCardComponent />
               </div>
            </div>
         </div>
      </div>
   );
}

export default HeadToHeadContainerComponent;
