import Header from '../Header';
import Menu from './Menu';
import Nat from '../../components/images/CA5BF6B5-395C-4784-907F-6BAF7B8303FC.jpeg';

const About = () => {
  return (
    <>
      <Header />
      <div className="main">
        <section className="about__section">
          <img className="pic" src={Nat} alt="Natalia Blanco"></img>
          <h2 className="section__subtitle--2">Hello peps! </h2>
          <p className="section__p">
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
    </>
  );
};

export default About;
