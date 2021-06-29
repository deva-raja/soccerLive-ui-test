import React from 'react';

function FooterAvatarComponent({ data }) {
   return (
      <div className='footer-avatar'>
         <div className='footer-avatar__icon-container'>
            <img src={data.icon} alt='dada' />
         </div>
         <div className='footer-avatar__text-container'>
            <div className='footer-avatar__heading'>{data.heading}</div>
            <div className='footer-avatar__text'>{data.text}</div>
         </div>
      </div>
   );
}

export default FooterAvatarComponent;
