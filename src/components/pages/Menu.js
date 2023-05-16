import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="menu__list">
          <Link className="menu__list__link" to="/About">
            About me
          </Link>
        </li>
        <li className="menu__list">
          <Link className="menu__list__link" to="/Projects">
            Projects
          </Link>
        </li>
        <li className="menu__list">
          <Link className="menu__list__link" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
