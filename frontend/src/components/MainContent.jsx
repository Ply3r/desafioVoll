import { useState } from "react";
import Menu from "./Menu";

const MainContent = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className="main-content">
      <Menu 
        isMenuActive={ isMenuActive }
        setIsMenuActive={ setIsMenuActive }
      />
      <div
        style={ { 
          'marginLeft': `${isMenuActive ? '18vw' : '6vw'}`,
          'transition': 'inherit'
        } }
      >
        { children }
      </div>
    </div>
  )
};

export default MainContent;
