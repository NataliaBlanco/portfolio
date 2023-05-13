import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h3>
        <Link to={'/'}>Home</Link>
      </h3>
    </header>
  );
};
export default Header;
