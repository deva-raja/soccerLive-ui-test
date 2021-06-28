import React, { useState } from 'react';
import PrimaryHeaderComponent from '../components/HeaderSection/PrimaryHeaderComponent';
import SecondaryHeaderComponent from '../components/HeaderSection/SecondaryHeaderComponent';
import HeroContainerComponent from '../components/HeroSection/HeroContainerComponent';
import HeroHeaderComponent from '../components/HeroSection/HeroHeaderComponent';
import OverLayComponent from '../components/OverlaySection/OverLayComponent';

function LandingPage() {
   const [active, setActive] = useState(false);
   return (
      <>
         <OverLayComponent active={active} setActive={setActive} />
         <div className='landing-page'>
            <PrimaryHeaderComponent setActive={setActive} />
            <SecondaryHeaderComponent />
            <HeroHeaderComponent />
            <HeroContainerComponent />
         </div>
      </>
   );
}

export default LandingPage;
