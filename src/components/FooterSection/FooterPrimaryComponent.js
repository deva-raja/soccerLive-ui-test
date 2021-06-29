import React from 'react';
import { RiArrowDropLeftFill } from 'react-icons/ri';
import { RiArrowDropRightFill } from 'react-icons/ri';
import ResultCardComponent from './utils/ResultCardComponent';

function FooterPrimaryComponent() {
   return (
      <div className='footer-primary bdr-radius'>
         {/* menu section */}
         <div className='footer-primary__menu'>
            <h2>Matches</h2>
            <div className='footer-primary__button-container'>
               <div className='footer-primary__btn--previous'>
                  <RiArrowDropLeftFill className='footer-primary__icon--previous' />
                  <p>Previous</p>
               </div>
               <div className='footer-primary__btn--next'>
                  <p>Next</p>
                  <RiArrowDropRightFill className='footer-primary__icon--next' />
               </div>
            </div>
         </div>

         {/* Date section */}
         <div className='footer-primary__date'>14/07/2021</div>

         {/* Card container */}
         <div className='footer-primary__card-container'>
            <ResultCardComponent />
            <ResultCardComponent />
            <ResultCardComponent />
         </div>
      </div>
   );
}

export default FooterPrimaryComponent;
