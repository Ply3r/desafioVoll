import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { BsFillCartFill, BsFillCartPlusFill } from 'react-icons/bs';
import { IoIosPaper } from 'react-icons/io';
import { BiExit } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import Icon from './Icon';
import { useContext } from 'react';
import { mainContext } from '../provider/mainProvider';

const Menu = ({ isMenuActive, setIsMenuActive }) => {
  const { user } = useContext(mainContext);
  const { pathname } = useLocation();

  return (
    <>
    
      <div 
        style={ { 'width': `${isMenuActive ? '370px' : '30px'}` } }
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
          {
            user && user.role === 'admin' && (
              <Icon 
                isMenuActive={ isMenuActive }
                currPage={ pathname } 
                Component={ BsFillCartPlusFill } 
                path="/products/add" 
              />
            ) 
          }
          <Icon 
            isMenuActive={ isMenuActive }
            currPage={ pathname } 
            Component={ IoIosPaper } 
            path="/extract" 
          />
          <Icon 
            isMenuActive={ isMenuActive }
            currPage={ pathname } 
            Component={ BiExit } 
            path="/" 
          />
        </div>
      </div>
    </>
  )
}

export default Menu;
