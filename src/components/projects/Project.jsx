import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'E-commerce Platform',
        image: 'https://picsum.photos/400/300',
        description: 'A full-featured e-commerce platform with cart functionality and payment integration.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        title: 'Task Management App',
        image: 'https://picsum.photos/400/301',
        description: 'A collaborative task management application with real-time updates.',
        technologies: ['React', 'Firebase', 'Tailwind CSS'],
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        title: 'Weather Dashboard',
        image: 'https://picsum.photos/400/302',
        description: 'A weather dashboard showing forecasts and historical weather data.',
        technologies: ['React', 'OpenWeather API', 'Chart.js'],
        github: 'https://github.com',
        live: 'https://example.com',
    },
];

const Projects = () => {
    return (
        <div className="min-h-screen p-8 bg-dark dark:bg-gray-900 text-light dark:text-white">
            <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl font-bold mt-10 mb-8 text-pink-700 dark:text-pink-600"
            >
                Projects
            </motion.h2>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="bg-dark/50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                            <p className="text-light/80 dark:text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 bg-primary/20 dark:bg-blue-400/20 rounded-full text-sm dark:text-gray-200"
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
                                    className="flex items-center gap-2 text-primary dark:text-blue-400 hover:text-secondary dark:hover:text-blue-300 transition-colors"
                                >
                                    <FaGithub /> GitHub
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-primary dark:text-blue-400 hover:text-secondary dark:hover:text-blue-300 transition-colors"
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

export default Projects;