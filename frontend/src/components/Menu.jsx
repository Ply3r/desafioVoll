import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { BsFillCartFill } from 'react-icons/bs';
import { IoIosPaper } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import Icon from './Icon';

const Menu = ({ isMenuActive, setIsMenuActive }) => {
  const { pathname } = useLocation();

  return (
    <>
    
      <div 
        style={ { 'width': `${isMenuActive ? '15vw' : '3vw'}` } }
        className="side-menu"
      >
        <div className="icon-container">
          <button
            className="icon"
            onClick={ () => setIsMenuActive(!isMenuActive) }
          >
            { !isMenuActive ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold /> }
          </button>
        </div>
        <div className="icons-container">
          <Icon
            isMenuActive={ isMenuActive }
            currPage={ pathname } 
            Component={ MdDashboard } 
            path="/dashboard" 
          />
          <Icon 
            isMenuActive={ isMenuActive }
            currPage={ pathname } 
            Component={ BsFillCartFill } 
            path="/products" 
          />
          <Icon 
            isMenuActive={ isMenuActive }
            currPage={ pathname } 
            Component={ IoIosPaper } 
            path="/extract" 
          />
          <Icon 
            isMenuActive={ isMenuActive }
            currPage={ pathname } 
            Component={ MdDashboard } 
            path="/" 
          />
        </div>
      </div>
    </>
  )
}

export default Menu;
