import { motion } from 'framer-motion';
import DOTS from 'vanta/src/vanta.dots'
import { useEffect } from 'react'

const Home = ({ onNavigate }) => {

    useEffect(function () {
        DOTS({
            el: '#vanta',
            scale: 1,
            scaleMobile: 0.6,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.00,
            minWidth: 400.00,
            amplitudeFactor: 4,
            xOffset: 6,
            yOffset: -0.10,
            color: 0xcad6dd,
            color2: 0xFD2155,
            backgroundColor: 0x1e293b
            // 0x1e293b testd
            // 0x152b3c original
        })
    }, [])


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex items-center relative overflow-hidden pl-10"
            id="vanta"
        >
            <div className="z-10 space-y-4 box-home">
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="lastName"
                >
                    Hi, <span className="name">I'm</span>
                </motion.p>
                <motion.h1
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    className="name"
                >
                    Gonzalo <span className="lastName">Palomo</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl text-light/80 dark:text-gray-300"
                >
                    Web Developer
                </motion.p>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-l text-light/80 dark:text-gray-300 subtitle"
                >
                    I am focused on front-end development, creative and passionate. I am dedicated to continuous learning and transforming ideas into real, engaging products and experiences.
                </motion.p>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="available text-teal-500"
                >
                    Available for projects
                </motion.div>

                <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    onClick={() => onNavigate('about')}
                    className="inline-block text-white px-6 py-2 rounded-lg transition-colors duration-300 aboutMeButtom"
                >
                    About Me
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Home;