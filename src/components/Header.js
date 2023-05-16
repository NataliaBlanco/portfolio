import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h3 className="header__ttl">
        <Link className="header__ttl__link" to={'/'}>
          Home
        </Link>
      </h3>
    </header>
  );
};
export default Header;
