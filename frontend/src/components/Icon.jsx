import { useNavigate } from 'react-router-dom';

const Icon = ({ isMenuActive, currPage, path, Component }) => {
  const navigate = useNavigate();

  const pathName = path[1] ? path[1].toUpperCase() + path.slice(2, path.length) : 'Exit';

  return (
    <button
      className={ `${currPage === path ? 'icon-active' : ''} icon` }
      onClick={ () => navigate(path) }
    >
      <p>
        <Component />
        { isMenuActive && 
          <span style={ { 'fontSize': '.8em' } }>
            { pathName }
          </span>
        }
      </p>
    </button>
  );
}

export default Icon;
