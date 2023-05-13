import Header from '../Header';
import Menu from './Menu';
import cv from '../docs/cv.pdf';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="main">
        <section className="main__section">
          <ul>
            <li>
              <a
                className="link"
                href="https://www.linkedin.com/in/natalia-blanco-outeiral"
                title="Linkedin"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://github.com/NataliaBlanco"
                title="Github"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="link"
                href="mailto: nataliaouteiral@gmail.com"
                title="Send me an email"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </li>
            <li>
              <a
                className="link"
                href={cv}
                title="Download my cv"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </li>
          </ul>
        </section>
        <Menu />
      </div>
    </>
  );
};

export default Contact;
