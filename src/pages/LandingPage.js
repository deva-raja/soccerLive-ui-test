import React, { useState } from 'react';
import OverLayComponent from '../components/OverLayComponent';
import PrimaryHeaderComponent from '../components/PrimaryHeaderComponent';
import SecondaryHeaderComponent from '../components/SecondaryHeaderComponent';
import pitch from '../icons/pitch.svg';
import stadium from '../icons/stadium.svg';

function LandingPage() {
   const [active, setActive] = useState(false);
   return (
      <>
         <OverLayComponent active={active} setActive={setActive} />
         <div className='landing-page'>
            <PrimaryHeaderComponent setActive={setActive} />
            <SecondaryHeaderComponent active={active} />
         </div>
      </>
   );
}

export default LandingPage;
