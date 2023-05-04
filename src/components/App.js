/* SECCIÓN DE IMPORT */

// - De React
// - Nuestros
// - Sass
import '../styles/App.scss';
import projects from '../components/service/projects.json';
import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Contactpage from './pages/Contactpage';
import About from './pages/About';
import Projects from './pages/Projects';

// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  const [data, setData] = useState(projects);

  /* EFECTOS (código cuando carga la página) */
  /* FUNCIONES HANDLER */
  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <div className="App">
      <Header></Header>
      <main>
        <h1>Natalia Blanco</h1>
        <Routes>
          <Route path="/Contactpage" element={<Contactpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <nav>
          <ul>
            <li>
              <Link to="/About">About me</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
