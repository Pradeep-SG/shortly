import About from './components/About';
import Boost from './components/Boost';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';

const App = () => {
  return (
    <>
      <div className="home-parent">
        <Header />
        <MainSection />
      </div>
      <div className="about-parent">
        <About />
      </div>
      <div className="boost-parent">
        <Boost />
      </div>
      <div className="footer-parent">
        <Footer />
      </div>
    </>
  );
};

export default App;
