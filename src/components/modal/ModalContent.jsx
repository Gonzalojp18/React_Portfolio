import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const ModalContent = forwardRef(({ children, onClose }, ref) => (
    <motion.div
        ref={ref}
        className="relative bottom-5 w-[100%] max-w-7xl h-[80vh] rounded-xl shadow-xl overflow-hidden"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
    >
        <button
            onClick={onClose}
            className="absolute top-0 right-20 text-white/80 hover:text-white p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
            id="closeButton"
        >
            <IoClose size={20} />
        </button>

        <div className="h-full overflow-auto p-6 custom-scrollbar">
            {children}
        </div>
    </motion.div>
));

ModalContent.displayName = 'ModalContent';
export default ModalContent;