import Header from '../Header';
import Menu from './Menu';

const About = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <section className="main__section">
          <h2>Hello peps!</h2>
          <p>
            A versatile individual with a large background in the Fashion
            indsutry, recently converted into the tech world and looking for new
            opportunities as a junior developer. I put passion, love and effort
            in what I do. I like to evolve throught times and always improve for
            the better. In my own personal life I like to spend time with my
            family, surf when I can, travel, read and learn new stuff .
          </p>
        </section>
        <Menu />
      </div>
    </div>
  );
};

export default About;
