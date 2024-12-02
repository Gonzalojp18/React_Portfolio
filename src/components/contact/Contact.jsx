import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
    {
        name: 'GitHub',
        icon: FaGithub,
        url: 'https://github.com/yourusername',
        color: 'hover:text-gray-400'
    },
    {
        name: 'LinkedIn',
        icon: FaLinkedin,
        url: 'https://linkedin.com/in/yourusername',
        color: 'hover:text-blue-400'
    },
    {
        name: 'Twitter',
        icon: FaTwitter,
        url: 'https://twitter.com/yourusername',
        color: 'hover:text-blue-400'
    }
];

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        toast.success('Message sent successfully!');
        reset();
    };

    return (
        <div className="min-h-screen p-8 bg-dark dark:bg-gray-900 text-light dark:text-white">
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl font-bold mb-12 text-primary dark:text-blue-400"
            >
                Contact Me
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full"
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-gray-200">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register('name', { required: 'Name is required' })}
                                className="w-full px-4 py-2 bg-dark/50 dark:bg-gray-800/50 border border-primary/30 dark:border-blue-400/30 rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400"
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">{errors.name.message}</span>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-gray-200">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                                className="w-full px-4 py-2 bg-dark/50 dark:bg-gray-800/50 border border-primary/30 dark:border-blue-400/30 rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email.message}</span>
                            )}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-gray-200">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                {...register('message', { required: 'Message is required' })}
                                className="w-full px-4 py-2 bg-dark/50 dark:bg-gray-800/50 border border-primary/30 dark:border-blue-400/30 rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400"
                            />
                            {errors.message && (
                                <span className="text-red-500 text-sm">{errors.message.message}</span>
                            )}
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3 bg-primary dark:bg-blue-600 hover:bg-secondary dark:hover:bg-blue-700 text-white rounded-lg transition-colors"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-primary dark:text-blue-400">
                        Connect With Me
                    </h3>
                    <div className="grid gap-6">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center p-6 bg-dark/50 dark:bg-gray-800/50 
                  rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
                  group ${link.color}`}
                                whileHover={{ scale: 1.02, x: 10 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <link.icon className="w-8 h-8 mr-4" />
                                <span className="text-lg font-medium dark:text-gray-200">{link.name}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;