import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import HelpingPeople from '../components/HelpingPeople';
import HelpingAnimals from '../components/HelpingAnimals';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingOrbs from '../components/FloatingOrbs';

export default function Home() {
  return (
    <div className="relative">
      <FloatingOrbs />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Mission />
          <HelpingPeople />
          <HelpingAnimals />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
