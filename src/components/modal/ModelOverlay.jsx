import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const ModalOverlay = forwardRef(({ children }, ref) => (
    <motion.div
        ref={ref}
        className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        {children}
    </motion.div>
));

ModalOverlay.displayName = 'ModalOverlay';
export default ModalOverlay;