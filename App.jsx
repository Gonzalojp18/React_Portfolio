import { Routes, Route } from 'react-router-dom';
import Layout from './src/components/layout/Layout';
import Home from './src/components/home/Home';
import About from './src/components/about/About';
import Skill from './src/components/skill/Skill';
import Project from './src/components/projects/Project';
import Contact from './src/components/contact/Contact';
import { Toaster } from 'react-hot-toast';

function App() {


    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path="Skills" element={<Skill />} />
                    <Route path="Projects" element={<Project />} />
                    <Route path="Contact" element={<Contact />} />
                </Route>
            </Routes>
            <Toaster position="bottom-right" />
        </>
    );
}

export default App;
