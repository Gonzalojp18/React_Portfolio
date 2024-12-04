import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        toast.success('Message sent successfully!');
        reset();
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-light dark:text-white"
        >
            <motion.h2
                variants={itemVariants}
                className="text-5xl font-bold mb-8 text-pink-700 dark:text-pink-600 mainTitle"
            >
                Let's Connect
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="space-y-6">
                    <p className="text-light/80 dark:text-gray-300">
                        Feel free to reach out for collaborations or just a friendly hello
                    </p>
                </motion.div>

                <motion.form
                    variants={itemVariants}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            {...register('name', { required: 'Name is required' })}
                            className="w-full px-4 py-2 bg-dark/30 dark:bg-gray-800/30 border border-primary/20
                dark:border-blue-400/20 rounded-lg focus:outline-none focus:border-primary
                dark:focus:border-blue-400 transition-colors"
                        />
                        {errors.name && (
                            <span className="text-red-400 text-sm mt-1">{errors.name.message}</span>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Your Email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                            className="w-full px-4 py-2 bg-dark/30 dark:bg-gray-800/30 border border-primary/20
                dark:border-blue-400/20 rounded-lg focus:outline-none focus:border-primary
                dark:focus:border-blue-400 transition-colors"
                        />
                        {errors.email && (
                            <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>
                        )}
                    </div>

                    <div>
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            {...register('message', { required: 'Message is required' })}
                            className="w-full px-4 py-2 bg-dark/30 dark:bg-gray-800/30 border border-primary/20
                dark:border-blue-400/20 rounded-lg focus:outline-none focus:border-primary
                dark:focus:border-blue-400 transition-colors resize-none"
                        />
                        {errors.message && (
                            <span className="text-red-400 text-sm mt-1">{errors.message.message}</span>
                        )}
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2 bg-pink-700 dark:bg-pink-600 hover:bg-secondary
                dark:hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact;