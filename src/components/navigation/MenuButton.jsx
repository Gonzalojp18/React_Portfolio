import { Bars3Icon } from '@heroicons/react/24/outline';

const MenuButton = ({ isOpen, setIsOpen }) => {
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-4 left-4 z-50 p-2 bg-primary rounded-md hover:bg-secondary transition-colors duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
        >
            <Bars3Icon className="h-6 w-6 text-white" />
        </button>
    );
};

export default MenuButton;