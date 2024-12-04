import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiMysql, SiVisualstudiocode, SiNotion, SiTrello, SiIntellijidea, SiBootstrap } from 'react-icons/si';

const Skills = () => {
  const frontendSkills = [
    { icon: FaReact, name: 'React' },
    { icon: FaHtml5, name: 'HTML5' },
    { icon: FaCss3, name: 'CSS3' },
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiTailwindcss, name: 'Tailwind CSS' },
    { icon: SiBootstrap, name: 'Bootstrap' },
  ];

  const backendSkills = [
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: SiExpress, name: 'Express' },
    { icon: FaGitAlt, name: 'Git' },
  ];

  const learningSkills = [
    { icon: FaJava, name: 'Java' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiMysql, name: 'MySQL' },
  ];

  const tools = [
    { icon: SiVisualstudiocode, name: 'VS Code' },
    { icon: SiNotion, name: 'Notion' },
    { icon: SiTrello, name: 'Trello' },
    { icon: SiIntellijidea, name: 'IntelliJ' },
  ];

  return (
    <div className="p-4 bg-opacity-100 dark:bg-gray-900 text-light dark:text-white overflow-x-hidden">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-bold mb-8 text-pink-700 dark:text-pink-700"
      >
        Tech & Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-200 dark:text-pink-600">Frontend</h3>
          <div className="grid grid-cols-2 gap-6">
            {frontendSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-2 bg-dark/50 dark:bg-gray-800/50 rounded-lg hover:bg-primary/10 dark:hover:bg-blue-400/10 transition-colors"
              >
                <skill.icon className="text-3xl mb-2 text-pink-700 dark:text-blue-400" />
                <span className="dark:text-pink-600 font-bold titleSkill">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-200 dark:text-pink-600">Backend</h3>
          <div className="grid grid-cols-2 gap-6">
            {backendSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-2 bg-dark/50 dark:bg-gray-800/50 rounded-lg hover:bg-primary/10 dark:hover:bg-blue-400/10 transition-colors"
              >
                <skill.icon className="text-4xl mb-2 text-pink-700 dark:text-gray-200" />
                <span className="dark:text-pink-600 font-bold titleSkill">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-200 dark:text-pink-600">Currently Learning</h3>
          <div className="grid grid-cols-2 gap-6">
            {learningSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-4 bg-dark/50 dark:bg-gray-800/50 rounded-lg hover:bg-primary/10 dark:hover:bg-blue-400/10 transition-colors"
              >
                <skill.icon className="text-3xl mb-2 text-pink-700 dark:text-gray-200" />
                <span className="dark:text-pink-600 font-bold titleSkill">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-200 dark:text-pink-600">Tools</h3>
          <div className="grid grid-cols-2 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center p-4 bg-dark/50 dark:bg-gray-800/50 rounded-lg hover:bg-primary/10 dark:hover:bg-blue-400/10 transition-colors"
              >
                <tool.icon className="text-3xl mb-2 text-pink-700 dark:text-gray-200" />
                <span className="dark:text-pink-600 font-bold titleSkill">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
