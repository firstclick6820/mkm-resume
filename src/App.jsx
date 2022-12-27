

// import Custom Components
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testmonials from './components/testmonials/Testmonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/general/ScrollUp';




function App() {
 
  return (

    <>
      <div className="container">
        <Header />
        <ScrollUp />
        <Navbar />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testmonials />
        <Contact />
      </div>

    <Footer />

    </>
  );
}

export default App;
