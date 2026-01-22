import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
