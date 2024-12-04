import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './src/components/navigation/Navbar';
import Home from './src/components/home/Home';
import Modal from './src/components/modal/Modal';
import About from './src/components/about/About';
import Skills from './src/components/skills/Skills';
import Projects from './src/components/projects/Project';
import Contact from './src/components/contact/Contact';
import ThemeToggle from './src/components/theme/ThemeToggle';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      <Home onNavigate={setActiveModal} />
      <ThemeToggle className="fixed top-4 right-4 z-50" />

      <Modal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        activeSection={activeModal}
      >
        {activeModal && {
          about: <About />,
          skill: <Skills />,
          projects: <Projects />,
          contact: <Contact />
        }[activeModal]}
      </Modal>

      <Navbar onNavigate={setActiveModal} activeSection={activeModal} />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;