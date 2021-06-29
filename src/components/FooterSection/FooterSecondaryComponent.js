import React from 'react';
import FooterAvatarComponent from './utils/FooterAvatarComponent';
import calendar from '../../icons/calendar.svg';
import stadium from '../../icons/stadium.svg';
import whistle from '../../icons/whistle.svg';

function FooterSecondaryComponent() {
   return (
      <div className='footer-secondary bdr-radius'>
         <h4 className='footer-secondary__header'>Match Info</h4>
         <div className='footer-secondary__avatar-container'>
            <FooterAvatarComponent
               data={{
                  icon: calendar,
                  heading: 'Date',
                  text: '16 Jan 2021',
               }}
            />
            <FooterAvatarComponent
               data={{
                  icon: stadium,
                  heading: 'Stadium',
                  text: 'Nou Camp,Barcelona',
               }}
            />
            <FooterAvatarComponent
               data={{
                  icon: whistle,
                  heading: 'Refree',
                  text: 'David Samuel',
               }}
            />
         </div>
         <div className='footer-secondary__text-container'>
            <h4 className='footer-secondary__sub-header'>Match Details</h4>
            <p className='footer-secondary__text--primary footer-secondary__text '>
               Arsenal is going head to head with Fulham starting on 18 Apr 2021 at 12:30 UTC at
               Emirates Stadium stadium, London city, England. The match is a part of the Premier
               League.
            </p>
            <p className='footer-secondary__text--secondary footer-secondary__text '>
               Arsenal played against Fulham in 2 matches this season. Currently, Arsenal rank 9th,
               while Fulham hold 18th position. Looking to compare the best-rated player on both
               teams? SofaScore's rating system assigns each player a specific rating based on
               numerous data factors.
            </p>
         </div>
      </div>
   );
}

export default FooterSecondaryComponent;
