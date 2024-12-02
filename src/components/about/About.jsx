import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen p-8 bg-dark dark:bg-gray-900 text-light dark:text-white">
            <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl font-bold mt-10 mb-8 text-pink-700 dark:text-pink-600"
            >
                About Me
            </motion.h2>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl space-y-6"
            >
                <p className="text-light/80 dark:text-gray-300 mt-4">
                    Hello! I'm Gonzalo, Front-End Web Developer with over 2 years of experience
                    in creating web applications. I specialize in building scalable, user-friendly
                    solutions that solve real-world problems.
                </p>

                <p className="text-light/80 dark:text-gray-300">
                    My journey in web development started with a curiosity about how things work on the
                    internet, and it has evolved into a professional career where I continuously learn
                    and adapt to new technologies.
                </p>

                <p className="text-light/80 dark:text-gray-300">
                I'm improving my skills in API integration to add functionality. I'm excited to always be learning something new. Right now, I'm diving deeper into Java and backend development to achieve better integration and reach my goal of becoming a more well-rounded developer
                </p>
            </motion.div>
        </div>
    );
};

export default About;