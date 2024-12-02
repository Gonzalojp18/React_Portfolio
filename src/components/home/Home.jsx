import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DOTS from 'vanta/src/vanta.dots'
import { useEffect } from 'react'

const Home = () => {



    useEffect(function () {
        DOTS({
            el: '#vanta',
            scale: 1,
            scaleMobile: 0.6,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 400.00,
            minWidth: 400.00,
            amplitudeFactor: 4,
            xOffset: 6,
            yOffset: -0.10,
            color: 0xcad6dd,
            color2: 0xFD2155,
            backgroundColor: 0x152b3c
        })
    }, [])



    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen w-full flex items-center relative overflow-hidden pl-10"
            id="vanta"
        >
            <div className="z-10 space-y-4">
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
                    className="available"
                >
                    Available for projects
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link
                        to="/about"
                        className="inline-block px-8 py-3 rounded-lg aboutMeButtom"
                    >
                        About Me
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;