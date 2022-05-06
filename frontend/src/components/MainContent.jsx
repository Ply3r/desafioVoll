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
          'marginLeft': `${isMenuActive ? '400px' : '80px'}`,
          'transition': 'inherit'
        } }
      >
        { children }
      </div>
    </div>
  )
};

export default MainContent;
