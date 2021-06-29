import React from 'react';
import FooterPrimaryComponent from './FooterPrimaryComponent';
import FooterSecondaryComponent from './FooterSecondaryComponent';

function FooterContainerComponent() {
   return (
      <div className='footer-container container bdr-radius'>
         <FooterPrimaryComponent />
         <FooterSecondaryComponent />
      </div>
   );
}

export default FooterContainerComponent;
