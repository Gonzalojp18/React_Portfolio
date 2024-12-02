import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import MenuButton from '../Navigation/MenuButton';
import ThemeToggle from '../Theme/ThemeToggle';

const Layout = () => {
    const [isNavOpen, setIsNavOpen] = useState(true);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        if (isHome) {
            setIsNavOpen(false);
        }
    }, [location.pathname, isHome]);

    return (
        <div className={`min-h-screen overflow-x-hidden ${isHome ? 'bg-transparent' : 'bg-dark dark:bg-gray-900'}`}>
            {!isHome && (
                <>
                    <MenuButton isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
                    <ThemeToggle className="fixed top-4 right-4 z-50" />
                </>
            )}

            <div className={`flex ${isHome ? 'w-full' : ''}`}>
                {!isHome && <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />}
                <main
                    className={`min-h-screen transition-all duration-300 ${isHome ? 'w-full' : isNavOpen ? 'md:w-[85%] lg:w-[80%] md:ml-[15%] lg:ml-[20%]' : 'w-full'
                        }`}
                >
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;