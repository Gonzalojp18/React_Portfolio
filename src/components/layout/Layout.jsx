import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// import { gsap } from 'gsap';
import Navbar from '../navigation/Navbar';
import ThemeToggle from '../theme/ThemeToggle';

const Layout = () => {
    const location = useLocation();
    const mainRef = useRef(null);
    const isHome = location.pathname === '/';

    useEffect(() => {
        // Page transition animation
        gsap.to(mainRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                gsap.to(mainRef.current, {
                    opacity: 1,
                    duration: 0.3,
                    delay: 0.1
                });
            }
        });
    }, [location.pathname]);

    return (
        <div className={`w-full ${isHome ? 'bg-dark' : 'bg-dark dark:bg-gray-900'}`}>
                        <Navbar />
            {!isHome && (
                <ThemeToggle className="fixed top-4 right-4 z-50" />
            )}
            <main
                ref={mainRef}
                className="min-h-screen w-full"
            >
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;