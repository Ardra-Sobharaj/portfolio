
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-slate-900 dark:text-slate-150 transition-colors duration-300 antialiased font-sans">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Core Sections */}
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <LearningJourney />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
