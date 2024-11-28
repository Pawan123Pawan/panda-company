import React from 'react';
import notfound from '../../assets/Notfound.gif';
const NotFound = () => {
  return (
    <div className="mx-auto md:w-[85%]">
      <img src={notfound} alt="Not_Found" />
    </div>
  );
};

export default NotFound;
