import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'skill', label: 'Skill', icon: FaCode },
    { id: 'projects', label: 'Project', icon: FaProjectDiagram },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

const Navbar = ({ onNavigate, activeSection }) => {
    const handleNavigation = (id) => {
        if (id === 'home') {
            onNavigate(null);
        } else {
            onNavigate(id);
        }
    };

    return (
        <motion.nav
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50"
        >
            <div className="max-w-2xl mx-auto px-4 py-2">
                <div className="flex justify-around items-center">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavigation(item.id)}
                            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${(item.id === 'home' && !activeSection) || activeSection === item.id
                                    ? 'text-teal-600 dark:text-pink-600 transform scale-110'
                                    : 'text-light/60 dark:text-white/60 hover:text-teal-600 dark:hover:text-teal-400 '
                                }`}
                        >
                            <item.icon className="text-2xl mb-1" />
                            <span className="text-sm font-bold">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;