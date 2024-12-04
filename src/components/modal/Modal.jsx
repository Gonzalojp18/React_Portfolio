import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { IoClose } from 'react-icons/io5';
import ModalOverlay from './ModelOverlay';
import ModalContent from './ModalContent';

const Modal = ({ isOpen, onClose, children, activeSection }) => {
    const modalRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                modalRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3 }
            );
            gsap.fromTo(
                contentRef.current,
                {
                    y: '100%',
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power3.out'
                }
            );
        }
    }, [isOpen, activeSection]);

    return (
        <AnimatePresence>
            {isOpen && (
                <ModalOverlay ref={modalRef}>
                    <ModalContent ref={contentRef} onClose={onClose}>
                        {children}
                    </ModalContent>
                </ModalOverlay>
            )}
        </AnimatePresence>
    );
};

export default Modal;