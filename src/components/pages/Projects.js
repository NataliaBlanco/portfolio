import Header from '../Header';
import Menu from './Menu';

const Projects = ({ data }) => {
  const renderprojects = () => {
    return data.map((project) => {
      return (
        <li className="project_card" key={project.id}>
          <h3 className="project_card_name">{project.name}</h3>
          <img
            className="project_card_img"
            src={project.img}
            alt="project"
          ></img>
          <p className="project_card">
            <a href={project.demo}>demo</a>
          </p>
          <p className="project_card">
            <a href={project.repo}>repo</a>
          </p>
          {project.stack.map((t, idx) => {
            return <span key={idx}>{t} </span>;
          })}
        </li>
      );
    });
  };

  return (
    <>
      <Header />
      <section className="list">
        <ul className="project">{renderprojects()}</ul>
      </section>
      <Menu />
    </>
  );
};

export default Projects;
