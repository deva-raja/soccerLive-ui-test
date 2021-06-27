import React from 'react';
import { FiX } from 'react-icons/fi';
import SecondaryHeaderComponent from './SecondaryHeaderComponent';

function OverLayComponent({ active, setActive }) {
   const handleClick = () => {
      setActive((prevState) => !prevState);
   };

   return (
      <>
         {active && (
            <div className='overlay'>
               <FiX className='close-icon' onClick={handleClick} />
               <SecondaryHeaderComponent />
            </div>
         )}
      </>
   );
}

export default OverLayComponent;
