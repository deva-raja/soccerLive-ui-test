import React, { useState } from 'react';
import PrimaryHeaderComponent from '../components/HeaderSection/PrimaryHeaderComponent';
import SecondaryHeaderComponent from '../components/HeaderSection/SecondaryHeaderComponent';
import HeadToHeadContainerComponent from '../components/HeadToHeadSection/HeadToHeadContainerComponent';
import HeroContainerComponent from '../components/HeroSection/HeroContainerComponent';
import HeroHeaderComponent from '../components/HeroSection/HeroHeaderComponent';
import MenuComponent from '../components/MenuSection/MenuComponent';
import OverLayComponent from '../components/OverlaySection/OverLayComponent';
import StatisticsContainerComponent from '../components/StatsSection/StatsContainerComponent';
import FooterContainerComponent from '../components/FooterSection/FooterContainerComponent';

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
            <MenuComponent />
            <StatisticsContainerComponent />
            <HeadToHeadContainerComponent />
            <FooterContainerComponent />
         </div>
      </>
   );
}

export default LandingPage;
