import Header from '../Header';
import Menu from './Menu';

const Projects = ({ data }) => {
  const renderprojects = () => {
    return data.map((project) => {
      return (
        <li className="project__card" key={project.id}>
          <h3 className="project__card__name">{project.name}</h3>
          {project.status && (
            <p className="project__card__status">{project.status}</p>
          )}
          <img
            className="project__card__img"
            src={project.image}
            alt="project"
            target="_blank"
          ></img>

          <div className="project__card__stack">
            {project.stack.map((t, idx) => {
              return (
                <p key={idx} className="prf">
                  {t}{' '}
                </p>
              );
            })}
          </div>
          <p className="project__card__p">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project__card__p__link"
            >
              <i className="fas fa-desktop icon"></i>
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="project__card__p__link"
            >
              <i className="fab fa-github-alt icon"></i>
            </a>
          </p>
        </li>
      );
    });
  };

  return (
    <>
      <Header />
      <div className="main">
        <section className="projects__section">
          <ul className="project">{renderprojects()}</ul>
        </section>
        <Menu />
      </div>
    </>
  );
};

export default Projects;
