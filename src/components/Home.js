import Header from './Header';
import Menu from './pages/Menu';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="section">
          <h1 className="section__title">Natalia Blanco</h1>
          <h2 className="section__subtitle">Front-End Dreamer</h2>
        </section>
        <Menu />
      </main>
    </div>
  );
};
export default Home;
