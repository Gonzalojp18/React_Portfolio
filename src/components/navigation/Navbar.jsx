import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/skills', label: 'Tech & Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
];

const Navbar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();

    const navVariants = {
        open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 10 } },
        closed: { x: '0', transition: { type: "spring", stiffness: 300, damping: 10 } }
    };

    const handleNavClick = (path) => {
        if (path === '/') {
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            id="main-navigation"
            variants={navVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="fixed top-0 left-0 h-full bg-dark dark:bg-gray-900 text-light dark:text-white
        w-full md:w-[15%] lg:w-[20%] min-w-[250px] md:min-w-0
        flex flex-col items-center justify-center shadow-lg z-40"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="space-y-8 w-full px-6">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `block text-2xl hover:text-pink-700 dark:hover:text-pink-900 transition-colors duration-300
            ${isActive ? 'text-pink-700 dark:text-pink-600' : 'text-light dark:text-white'}
            w-full text-center py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-blue-400/10`
                        }
                        onClick={() => handleNavClick(item.path)}
                        role="menuitem"
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;