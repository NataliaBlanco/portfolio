/* SECCIÓN DE IMPORT */

// - De React
// - Nuestros
// - Sass
import '../styles/App.scss';
import projectdata from './service/projectdata.json';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  const [data] = useState(projectdata);

  /* EFECTOS (código cuando carga la página) */
  /* FUNCIONES HANDLER */
  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/Projects" element={<Projects data={data} />} />
    </Routes>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
