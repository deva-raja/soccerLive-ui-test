import React from 'react';
import { FiX } from 'react-icons/fi';
import SecondaryHeaderComponent from '../HeaderSection/SecondaryHeaderComponent';

function OverLayComponent({ active, setActive }) {
   const handleClick = () => {
      setActive((prevState) => !prevState);
   };

   return (
      <>
         {active && (
            <div className='overlay'>
               <FiX className='close-icon' onClick={handleClick} />
               <SecondaryHeaderComponent active={active} />
            </div>
         )}
      </>
   );
}

export default OverLayComponent;
