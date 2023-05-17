import Header from '../Header';
import Menu from './Menu';
import cv from '../docs/NATALIA BLANCO ENG.pdf';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="main">
        <section className="contact__section">
          <p className="prg">
            If you would like to know a little bit more about me, please feel
            free to reach out on the below links.
          </p>
          <ul className="menu">
            <li className="menu__li">
              <a
                className="menu__li__linkedin"
                href="https://www.linkedin.com/in/natalia-blanco-outeiral"
                title="Linkedin"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li className="menu__li">
              <a
                className="menu__li__github"
                href="https://github.com/NataliaBlanco"
                title="Github"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="menu__li">
              <a
                className="menu__li__mail"
                href="mailto: nataliaouteiral@gmail.com"
                title="Send me an email"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </li>
          </ul>
          <p className="prg">You can alternatively download my CV below</p>
          <a
            className="cv"
            href={cv}
            title="Download my cv"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </section>
        <Menu />
      </div>
    </>
  );
};

export default Contact;
