import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
const socialLinks = [
    {
        name: 'GitHub',
        icon: FaGithub,
        url: 'https://github.com/Gonzalojp18',
        color: 'hover:text-gray-400'
    },
    {
        name: 'LinkedIn',
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/gonzalopalomo/',
        color: 'hover:text-blue-400'
    },
    {
        name: 'Twitter',
        icon: FaTwitter,
        url: 'https://x.com/gonzalojp8',
        color: 'hover:text-blue-400'
    }
];

const About = () => {
    return (
        <section className="flex justify-around p-4 bg-opacity-100 dark:bg-gray-900 text-light dark:text-white rounded-xl"
        id="about">
            <article>
            <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl font-bold mb-8 text-pink-700 dark:text-pink-600 mainTitle"
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
            </article>
            <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <section>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-200 dark:text-pink-600 p-6">
                        Connect With Me
                    </h3>
                    <article className="grid gap-6">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center p-4 bg-pink-700 dark:bg-gray-800/50
                rounded-lg shadow-lg hover:shadow-xl transition-all duration-300
                group ${link.color}`}
                                whileHover={{ scale: 1.02, x: 10 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <link.icon className="w-10 h-6 mr-4" />
                                <span className="text-l font-small dark:text-gray-200">{link.name}</span>
                            </motion.a>
                        ))}
                    </article>
                    </section>
                </motion.div>
        </section>
    );
};

export default About;