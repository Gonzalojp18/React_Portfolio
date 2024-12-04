import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'Puesta Punto',
        image: 'https://picsum.photos/400/300',
        description: 'Modern website design leveraging React for optimized performance and user-centric UX, prioritizing mobile-first development.',
        technologies: ['React', 'Node.js', 'Gsap', 'Bootstrap'],
        github: 'https://github.com/Gonzalojp18/PuestaPunto',
        live: 'https://puesta-punto.vercel.app/',
    },
    {
        title: 'Task Management App',
        image: 'https://picsum.photos/400/301',
        description: 'A foundational practice project to explore React’s syntax, component types (Stateless and Stateful), and isomorphism, ensuring proper structure and positioning.',
        technologies: ['React', 'MaterialUX', 'Tailwind CSS'],
        github: 'https://github.com/Gonzalojp18/TodoAppCRA',
        live: 'https://todo-app-cra.vercel.app/',
    },
    {
        title: 'RememberMeAPP',
        image: 'https://picsum.photos/400/302',
        description: 'A personal project focused on simplifying English learning through IPA understanding, combining passion and innovation to make ideas a reality.',
        technologies: ['React', 'Oxford Diccionary API', 'ChackraUI'],
        github: 'https://github.com/Gonzalojp18/Diccionary',
        live: 'https://illustrious-quokka-039cc0.netlify.app/',
    },
    {
        title: 'PAM',
        image: 'https://picsum.photos/400/303',
        description: 'Challenge to solidify web development skills by manually creating and styling form layouts, showcasing early mastery of foundational techniques.',
        technologies: ['Html', 'Scss', 'Bootstrap'],
        github: 'https://github.com/Gonzalojp18/PremiosPAM',
        live: 'https://lustrous-froyo-e184be.netlify.app',
    },
];

const Project = () => {
    return (
        <div className="p-4 bg-opacity-100 dark:bg-gray-900 text-light dark:text-white">
            <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl font-bold mb-8 text-pink-700 dark:text-pink-600 mainTitle"
            >
                Projects
            </motion.h2>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="bg-dark/50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-36 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                            <p className="text-light/80 dark:text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 bg-primary/20 dark:bg-blue-400/20 rounded-full text-xs dark:text-gray-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-teal-500 dark:text-blue-400 hover:text-secondary dark:hover:text-blue-300 transition-colors"
                                >
                                    <FaGithub /> GitHub
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-teal-500 dark:text-blue-400 hover:text-secondary dark:hover:text-blue-300 transition-colors"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Project;