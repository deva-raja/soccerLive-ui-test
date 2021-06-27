import React, { useState } from 'react';
import OverLayComponent from '../components/OverLayComponent';
import PrimaryHeaderComponent from '../components/PrimaryHeaderComponent';
import SecondaryHeaderComponent from '../components/SecondaryHeaderComponent';

function LandingPage() {
   const [active, setActive] = useState(false);
   return (
      <>
         <OverLayComponent active={active} setActive={setActive} />
         <div className='landing-page'>
            <PrimaryHeaderComponent setActive={setActive} />
            <SecondaryHeaderComponent />
         </div>
      </>
   );
}

export default LandingPage;
