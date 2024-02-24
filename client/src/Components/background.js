import React from "react";
import Backgroundimg from '../assets/background.jpg'

const Background = () => {
  return (
    <div style={{ position:"fixed",width: "100%", height: "100%", backgroundImage: `url(${Backgroundimg})`, backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
      {/* Add any loading indicators or other elements here */}
    </div>
  );
};

export default Background;