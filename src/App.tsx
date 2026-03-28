import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
// import VantaComponent from './VantaComponent';
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-gray-200 font-mono relative">
        <div className="absolute inset-0 circuit-pattern opacity-50 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(10, 226, 89, 0.05),transparent_70%)] z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
             <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
