import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h2>
        <Link to={'/'}>Home</Link>
      </h2>
    </header>
  );
};
export default Header;
