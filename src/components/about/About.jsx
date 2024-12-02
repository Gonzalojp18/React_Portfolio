import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen p-8 bg-dark dark:bg-gray-900 text-light dark:text-white">
            <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl font-bold mb-8 text-primary dark:text-blue-400"
            >
                About Me
            </motion.h2>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl space-y-6"
            >
                <p className="text-light/80 dark:text-gray-300">
                    Hello! I'm John Doe, a passionate Full Stack Developer with over 5 years of experience
                    in creating web applications. I specialize in building scalable, user-friendly
                    solutions that solve real-world problems.
                </p>

                <p className="text-light/80 dark:text-gray-300">
                    My journey in web development started with a curiosity about how things work on the
                    internet, and it has evolved into a professional career where I continuously learn
                    and adapt to new technologies.
                </p>

                <p className="text-light/80 dark:text-gray-300">
                    When I'm not coding, you can find me contributing to open-source projects,
                    writing technical articles, or mentoring aspiring developers.
                </p>
            </motion.div>
        </div>
    );
};

export default About;