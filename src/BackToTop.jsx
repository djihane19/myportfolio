import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                    className="position-fixed bottom-0 end-0 m-3 z-50"
                >
                    <motion.button
                        className="btn p-0 rounded-circle shadow"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        style={{
                            width: '36px',
                            height: '36px',
                            background: isHovered 
                                ? 'linear-gradient(135deg, #22D3EE, #4FD1FF)' 
                                : 'linear-gradient(135deg, #4FD1FF, #22D3EE)',
                            border: 'none',
                            boxShadow: isHovered 
                                ? '0 0 15px rgba(34, 211, 238, 0.6)' 
                                : '0 0 8px rgba(79, 209, 255, 0.4)'
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.div
                            animate={{ 
                                y: isHovered ? -2 : 0 
                            }}
                            transition={{ type: 'spring', stiffness: 500 }}
                            className="d-flex justify-content-center align-items-center h-100"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="28" 
                                height="28" 
                                fill="#1B1F3B" 
                                viewBox="0 0 24 24"
                                stroke="#1B1F3B"
                                strokeWidth="2"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M5 10l7-7m0 0l7 7m-7-7v18" 
                                />
                            </svg>
                        </motion.div>
                        <span className="visually-hidden">Back to top</span>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default BackToTop;